// Auth.jsx
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    phone: '',
    birth_date: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Limpiar error cuando el usuario empiece a escribir
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        // Iniciar sesión
        await login(formData.email, formData.password);
        navigate('/my-trackfit'); // Redirigir a la página principal después del login
      } else {
        // Registrarse
        if (formData.password !== formData.password_confirmation) {
          setError('Las contraseñas no coinciden');
          setLoading(false);
          return;
        }

        await register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.password_confirmation,
          phone: formData.phone,
          birth_date: formData.birth_date
        });
        navigate('/my-trackfit'); // Redirigir después del registro
      }
    } catch (error) {
      setError(error.message || 'Error en la autenticación');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      phone: '',
      birth_date: ''
    });
    setError('');
  };

  const handleTabChange = (loginMode) => {
    setIsLogin(loginMode);
    resetForm();
  };

  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="mb-4 sm:mt-0">
        <Link
          to="/"
          className="inline-block bg-[#FCA311] text-[#14213D] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition border border-black shadow-[0_0_0_0_black] hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_black] active:translate-y-0.5 active:translate-x-0.5 active:shadow-[0_0_0_0_black]"
        >
          Inicio
        </Link>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 font-semibold ${isLogin ? "text-[#14213D] border-b-2 border-[#14213D]" : "text-gray-500"}`}
            onClick={() => handleTabChange(true)}
          >
            Iniciar sesión
          </button>
          <button
            className={`px-4 py-2 font-semibold ${!isLogin ? "text-[#14213D] border-b-2 border-[#14213D]" : "text-gray-500"}`}
            onClick={() => handleTabChange(false)}
          >
            Registrarse
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre completo"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14213D]"
                required={!isLogin}
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Teléfono (opcional)"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14213D]"
              />
              <input
                type="date"
                name="birth_date"
                value={formData.birth_date}
                onChange={handleChange}
                placeholder="Fecha de nacimiento"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14213D]"
              />
            </>
          )}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo electrónico"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14213D]"
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Contraseña"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14213D]"
            required
          />

          {!isLogin && (
            <input
              type="password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              placeholder="Confirmar contraseña"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14213D]"
              required={!isLogin}
            />
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#14213D] text-white py-2 rounded-md hover:bg-[#1f2e57] transition duration-300 ease-in-out border border-black shadow-[0_0_0_0_black] hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_black] active:translate-y-0.5 active:translate-x-0.5 active:shadow-[0_0_0_0_black] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:translate-x-0 disabled:hover:shadow-[0_0_0_0_black]"
          >
            {loading
              ? (isLogin ? "Iniciando sesión..." : "Registrando...")
              : (isLogin ? "Iniciar sesión" : "Registrarse")
            }
          </button>
        </form>

        {isLogin && (
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-[#FCA311] hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          
        )}
      </div>
    </div>
  );
}