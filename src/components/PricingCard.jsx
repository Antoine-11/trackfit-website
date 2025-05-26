// src/components/PricingCard.jsx
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import apiService from "../services/api";

export default function PricingCard({ 
  title, 
  price, 
  description1, 
  description2, 
  description3, 
  description4, 
  description5,
  planId,
  duration
}) {
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const handleChoosePlan = async () => {
    // Si no está autenticado, redirigir a login
    if (!isAuthenticated) {
      navigate('/auth');
      return;
    }

    // Confirmar la suscripción
    const confirmed = window.confirm(
      `¿Estás seguro de que quieres suscribirte al plan ${title} por ${price}?\n\nEsto activará tu suscripción inmediatamente.`
    );

    if (!confirmed) return;

    setLoading(true);

    try {
      const response = await apiService.subscribe(planId, 'card');
      
      // Mostrar mensaje de éxito
      alert(`¡Suscripción activada exitosamente!\n\nPlan: ${title}\nDuración: ${duration} ${duration === 1 ? 'mes' : 'meses'}\n\n¡Bienvenido a TrackFit!`);
      
      // Forzar recarga de la página para actualizar el estado
      window.location.href = '/my-trackfit';
      
    } catch (error) {
      console.error('Error al suscribirse:', error);
      if (error.message.includes('Ya tienes una suscripción activa')) {
        alert('Ya tienes una suscripción activa. Ve a "My TrackFit" para ver los detalles.');
        navigate('/my-trackfit');
      } else {
        alert(`Error al procesar la suscripción: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center rounded-lg p-6 bg-[#14213D]">
      <h3 className="text-[38px] text-white font-bold mb-2">{price}</h3>
      <p className="text-2xl font-semibold text-[#FCA311] mb-16">{title}</p>
      <div className="text-white text-[18px]">
        <p className="border-b-[1px] py-6">**{description1}**</p>
        <p className="border-b-[1px] py-6">{description2}</p>
        <p className="border-b-[1px] py-6">{description3}</p>
        <p className="border-b-[1px] py-6">{description4}</p>
        <p className="text-[#FCA311] py-6">{description5}</p>
        <button 
          onClick={handleChoosePlan}
          disabled={loading}
          className="w-full bg-white text-black rounded-full text-[18px] font-semibold px-8 py-4 cursor-pointer transition duration-300 ease-in-out border border-black shadow-[0_0_0_0_black] hover:-translate-y-1 hover:-translate-x-0.5 hover:bg-[#FCA311] hover:text-white hover:shadow-[2px_5px_0_0_black] active:translate-y-0.5 active:translate-x-0.5 active:shadow-[0_0_0_0_black] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:translate-x-0 disabled:hover:shadow-[0_0_0_0_black]"
        >
          {loading ? 'Procesando...' : 'Elegir Plan'}
        </button>
      </div>
    </div>
  );
}