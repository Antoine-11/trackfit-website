import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Importar useNavigate

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate(); // ✅ Hook para redireccionar

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes integrar el envío con emailjs, backend o API
    console.log("Mensaje enviado:", formData);

    // Redirigir tras el "envío"
    navigate("/thanksform");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 space-y-4 max-w-5xl w-full mx-auto">
      <div>
        <label className="block text-sm font-semibold mb-1" htmlFor="name">
          Nombre
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1" htmlFor="email">
          Correo electrónico
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1" htmlFor="message">
          Mensaje
        </label>
        <textarea
          name="message"
          id="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-[#14213D] text-white px-6 py-3 rounded-lg hover:bg-[#0e172e] transition"
      >
        Enviar mensaje
      </button>
    </form>
  );
}
