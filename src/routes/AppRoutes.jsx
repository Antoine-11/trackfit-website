
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import Home from "../pages/Home";
import About from "../pages/About";
import Pricing from "../pages/Pricing";
import Classes from "../pages/Classes";
import BookClass from "../pages/BookClass";
import Trainings from "../pages/Trainings";
import Contact from "../pages/Contact";
import Auth from "../pages/Auth";
import ThanksForm from "../pages/ThanksForm";
import MyTrackfit from "../pages/MyTrackfit";
import ResetPassword from "../pages/ResetPassword";

// Componente para rutas protegidas
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#14213D] mx-auto mb-4"></div>
          <p className="text-[#14213D] text-lg">Verificando sesión...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

// Componente para redirigir usuarios autenticados lejos de la página de auth
const AuthRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#14213D] mx-auto mb-4"></div>
          <p className="text-[#14213D] text-lg">Cargando...</p>
        </div>
      </div>
    );
  }

  // Si ya está autenticado, redirigir a My TrackFit
  if (isAuthenticated) {
    return <Navigate to="/my-trackfit" replace />;
  }

  return children;
};

export default function AppRoutes() {
  const { loading } = useAuth();

  // Mostrar loading global mientras se inicializa la autenticación
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#14213D] mx-auto mb-4"></div>
          <h2 className="text-[#14213D] text-xl font-semibold mb-2">TrackFit</h2>
          <p className="text-gray-600">Inicializando aplicación...</p>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/book-class" element={<BookClass />} />
      <Route path="/trainings" element={<Trainings />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thanksform" element={<ThanksForm />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      
      {/* Ruta de autenticación - redirige si ya está logueado */}
      <Route 
        path="/auth" 
        element={
          <AuthRoute>
            <Auth />
          </AuthRoute>
        } 
      />
      
      {/* Rutas protegidas */}
      <Route 
        path="/my-trackfit" 
        element={
          <ProtectedRoute>
            <MyTrackfit />
          </ProtectedRoute>
        } 
      />
      
      {/* Ruta por defecto - redirige a home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}