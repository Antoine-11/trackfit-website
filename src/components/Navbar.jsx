// Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import menuImg from "../assets/images/logo_trackfit_sinfondo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  // Maneja el redimensionado
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Salir al clicar fuera 
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(e.target) &&
        buttonRef.current && 
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Cambio de Menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Manejar logout
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      setIsOpen(false);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <header className="sticky top-0 bg-[#14213D] text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" >
          <img src={menuImg || "/placeholder.svg"} alt="Logo" className="max-w-[150px] mx-auto h-auto" />
        </Link>

        {/* Menu de escritorio */}
        <nav className="hidden custom:flex space-x-10 font-medium text-[18px] items-center">
          <Link to="/" className="hover:text-[#FCA311] transition">Inicio</Link>
          <Link to="/about" className="hover:text-[#FCA311] transition">Nosotros</Link>
          <Link to="/pricing" className="hover:text-[#FCA311] transition">Tarifas</Link>
          <Link to="/classes" className="hover:text-[#FCA311] transition">Clases</Link>
          <Link to="/trainings" className="hover:text-[#FCA311] transition">Entrenamientos</Link>
          <Link to="/contact" className="hover:text-[#FCA311] transition">Contacto</Link>
          
          {/* Mostrar diferentes opciones según el estado de autenticación */}
          {isAuthenticated ? (
            <>
              <Link to="/my-trackfit" className="hover:text-[#FCA311] transition">My TrackFit</Link>
              <div className="flex items-center space-x-4">
                <span className="text-sm">Hola, {user?.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition"
                >
                  Cerrar Sesión
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/auth" className="hover:text-[#FCA311] transition">Iniciar Sesión</Link>
            </>
          )}
        </nav>

        {/* Menú hamburguesa versión móvil */}
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="custom:hidden focus:outline-none z-50 relative"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú versión móvil despliegue */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-40"
        >
          <div className="w-full h-full flex flex-col items-center justify-center space-y-6 px-8 text-white text-2xl font-medium">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#FCA311]">Inicio</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-[#FCA311]">Nosotros</Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)} className="hover:text-[#FCA311]">Tarifas</Link>
            <Link to="/classes" onClick={() => setIsOpen(false)} className="hover:text-[#FCA311]">Clases</Link>
            <Link to="/trainings" onClick={() => setIsOpen(false)} className="hover:text-[#FCA311]">Entrenamientos</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#FCA311]">Contacto</Link>
            
            {/* Opciones móviles según autenticación */}
            {isAuthenticated ? (
              <>
                <Link to="/my-trackfit" onClick={() => setIsOpen(false)} className="hover:text-[#FCA311]">My TrackFit</Link>
                <div className="text-center">
                  <p className="text-lg mb-4">Hola, {user?.name}</p>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/auth" onClick={() => setIsOpen(false)} className="hover:text-[#FCA311]">Iniciar Sesión</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}