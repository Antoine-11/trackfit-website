// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import apiService from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Añadir estado de carga

  // Verificar si hay una sesión guardada al cargar la aplicación
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        const savedUser = localStorage.getItem('user');

        if (token && savedUser) {
          // Restaurar usuario desde localStorage
          const userData = JSON.parse(savedUser);
          setUser(userData);
          setIsAuthenticated(true);

          // Opcional: Verificar que el token sigue siendo válido
          try {
            const currentUser = await apiService.getMe();
            setUser(currentUser.user);
          } catch (error) {
            // Si el token no es válido, limpiar la sesión
            console.log('Token inválido, limpiando sesión');
            logout();
          }
        }
      } catch (error) {
        console.error('Error al inicializar autenticación:', error);
        logout();
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await apiService.login(email, password);
      
      if (response.user && response.token) {
        setUser(response.user);
        setIsAuthenticated(true);
        return response;
      } else {
        throw new Error('Respuesta de login inválida');
      }
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const response = await apiService.register(userData);
      
      if (response.user && response.token) {
        setUser(response.user);
        setIsAuthenticated(true);
        return response;
      } else {
        throw new Error('Respuesta de registro inválida');
      }
    } catch (error) {
      console.error('Error en registro:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      // Intentar hacer logout en el servidor
      if (isAuthenticated) {
        await apiService.logout();
      }
    } catch (error) {
      console.error('Error al hacer logout en el servidor:', error);
    } finally {
      // Limpiar estado local siempre
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
    }
  };

  const value = {
    user,
    isAuthenticated,
    loading, // Exponer el estado de carga
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};