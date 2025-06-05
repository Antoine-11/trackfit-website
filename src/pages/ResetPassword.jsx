import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:8000/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al restablecer contraseña');
      }

      setSuccess('Contraseña actualizada con éxito. Redirigiendo al login...');
      setTimeout(() => navigate('/auth'), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-[#14213D]">Restablecer Contraseña</h2>

        {error && <div className="text-red-600 mb-4">{error}</div>}
        {success && <div className="text-green-600 mb-4">{success}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            name="password"
            placeholder="Nueva contraseña"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            name="password_confirmation"
            placeholder="Confirmar contraseña"
            value={formData.password_confirmation}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#14213D] text-white py-2 rounded-md hover:bg-[#1f2e57]"
          >
            {loading ? "Actualizando..." : "Restablecer contraseña"}
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/auth" className="text-sm text-[#FCA311] hover:underline">Volver al login</Link>
        </div>
      </div>
    </div>
  );
}
