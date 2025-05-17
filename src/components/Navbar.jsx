import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import menuImg from "../assets/images/logo_trackfit_sinfondo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null); // New ref for the toggle button

  // Resize handler
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

  // Click outside handler - FIXED
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if click is outside both the menu AND the toggle button
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

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 bg-[#14213D] text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" >
          <img src={menuImg} alt="Logo" className="max-w-[150px] mx-auto h-auto" />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden custom:flex space-x-10 font-medium text-[18px] items-center">
          <Link to="/" className="hover:text-[#FCA311] transition">Inicio</Link>
          <Link to="/about" className="hover:text-[#FCA311] transition">Sobre Nosotros</Link>
          <Link to="/pricing" className="hover:text-[#FCA311] transition">Tarifas</Link>
          <Link to="/classes" className="hover:text-[#FCA311] transition">Clases</Link>
          <Link to="/trainings" className="hover:text-[#FCA311] transition">Entrenamientos</Link>
          <Link to="/contact" className="hover:text-[#FCA311] transition">Contacto</Link>
          <Link to="/auth" className="hover:text-[#FCA311] transition">My TrackFit</Link>
          <Link to="/auth" className="ml-4 bg-[#FCA311] text-[#14213D] px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition">
            Apúntate
          </Link>
        </nav>

        {/* Mobile toggle button - FIXED with ref */}
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

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-40"
        >
          <div className="w-full h-full flex flex-col items-center justify-center space-y-6 px-8 text-white text-2xl font-medium">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#FCA311]">Inicio</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-[#FCA311]">Sobre Nosotros</Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)} className="hover:text-[#FCA311]">Tarifas</Link>
            <Link to="/classes" onClick={() => setIsOpen(false)} className="hover:text-[#FCA311]">Clases</Link>
            <Link to="/trainings" onClick={() => setIsOpen(false)} className="hover:text-[#FCA311]">Entrenamientos</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#FCA311]">Contacto</Link>
            <Link to="/auth" onClick={() => setIsOpen(false)} className="hover:text-[#FCA311]">My TrackFit</Link>
            <Link to="/auth" onClick={() => setIsOpen(false)} className="mt-4 bg-[#FCA311] text-[#14213D] px-6 py-3 rounded-full font-semibold hover:bg-opacity-90">
              Apúntate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}