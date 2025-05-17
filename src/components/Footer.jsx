import footerImg from "../assets/images/logo_trackfit_sinfondo.png"
import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <footer className="bg-[#14213D] text-white">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sección 1: Logo / Nombre */}
          <Link to="/" >
            <img src={footerImg} alt="Logo" className="max-w-[200px]" />
          
          </Link>
  
          {/* Sección 2: Enlaces */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Navegación</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:text-[#FCA311]">Inicio</a></li>
              <li><a href="/about" className="hover:text-[#FCA311]">Sobre Nosotros</a></li>
              <li><a href="/pricing" className="hover:text-[#FCA311]">Tarifas</a></li>
              <li><a href="/classes" className="hover:text-[#FCA311]">Clases</a></li>
              <li><a href="/trainings" className="hover:text-[#FCA311]">Entrenamientos</a></li>
              <li><a href="/contact" className="hover:text-[#FCA311]">Contacto</a></li>
            </ul>
          </div>
  
          {/* Sección 3: Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Contacto</h4>
            <p className="text-sm">📍 Calle Fitness 123, Ciudad Deportiva</p>
            <p className="text-sm mt-1">📞 +34 600 123 456</p>
            <p className="text-sm mt-1">📧 contacto@trackfit.com</p>
          </div>
        </div>
  
        {/* Línea inferior */}
        <div className="text-center text-xs text-[#E5E5E5] py-4 border-t border-gray-700">
          © {new Date().getFullYear()} TrackFit. Todos los derechos reservados.
        </div>
      </footer>
    );
  }
  