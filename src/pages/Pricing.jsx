
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PricingCard from "../components/PricingCard";
import MainLayout from "../layouts/MainLayout";
import Slider from "../components/Slider";
import FlipCard from "../components/FlipCard";
import apiService from "../services/api";

import sliderImage from "../assets/images/plancha.jpg";

// Animación fadeUp
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Pricing() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar planes desde la API
  useEffect(() => {
    const loadPlans = async () => {
      try {
        const response = await apiService.getPlans();
        setPlans(response.plans);
      } catch (error) {
        console.error('Error loading plans:', error);
        // Fallback a planes estáticos si falla la API
        setPlans([
          {
            id: 1,
            name: "Plan Básico",
            price: 29.99,
            duration_months: 1,
            description: "Acceso completo al gimnasio durante 1 mes"
          },
          {
            id: 2,
            name: "Plan Premium",
            price: 79.99,
            duration_months: 3,
            description: "Acceso completo por 3 meses + clases grupales"
          },
          {
            id: 3,
            name: "Plan VIP",
            price: 149.99,
            duration_months: 6,
            description: "Acceso completo por 6 meses + beneficios VIP"
          },
          {
            id: 4,
            name: "Plan Anual",
            price: 279.99,
            duration_months: 12,
            description: "El mejor precio por 12 meses completos"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadPlans();
  }, []);

  // Mapear planes de la API a formato de la UI
  const getPricingPlans = () => {
    return plans.map(plan => {
      // Convertir price y duration_months a números
      const price = parseFloat(plan.price) || 0;
      const durationMonths = parseInt(plan.duration_months) || 1;
      
      const monthlyPrice = durationMonths > 1 ? (price / durationMonths).toFixed(2) : null;
      const annualSavings = durationMonths > 1 ? ((29.99 * durationMonths) - price).toFixed(2) : null;
      
      return {
        id: plan.id,
        title: durationMonths === 1 ? "1 MES" : 
               durationMonths === 3 ? "3 MESES" :
               durationMonths === 6 ? "6 MESES" : "12 MESES",
        price: `${price.toFixed(2)}€`,
        description1: monthlyPrice ? `${monthlyPrice}€ Mensual` : "--",
        description2: "Sin contrato",
        description3: "Sin Permanencia", 
        description4: "Sin Domiciliación",
        description5: annualSavings && parseFloat(annualSavings) > 0 ? `¡¡${annualSavings}€ de Ahorro Anual!!` : "--",
        planId: plan.id,
        duration: durationMonths
      };
    });
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-xl text-[#14213D]">Cargando planes...</div>
        </div>
      </MainLayout>
    );
  }

  const pricingPlans = getPricingPlans();

  return (
    <MainLayout>
      <div className="space-y-16">
        {/* Slider */}
        <Slider heroImg={sliderImage} title="TARIFAS" />

        {/* Descripción */}
        <motion.div 
          className="max-w-5xl mx-auto px-4 text-center space-y-4" 
          variants={fadeUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#14213D] text-[22px]">
            ¡Elige el plan que mejor se adapte a tus objetivos y estilo de vida! Flexibilidad y beneficios exclusivos.
          </p>
        </motion.div>

        {/* Tarifas principales */}
        <motion.section 
          className="py-12 px-4 max-w-[1600px] mx-auto w-full" 
          variants={fadeUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, idx) => (
              <PricingCard
                key={plan.id}
                title={plan.title}
                price={plan.price}
                description1={plan.description1}
                description2={plan.description2}
                description3={plan.description3}
                description4={plan.description4}
                description5={plan.description5}
                planId={plan.planId}
                duration={plan.duration}
              />
            ))}
          </div>
        </motion.section>

        {/* Días sueltos */}
        <motion.section 
          variants={fadeUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-[38px] text-[#14213D] font-bold text-center mb-8">Días Sueltos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
            <FlipCard frontContent="Lunes a Sábado" backContent="5,00€" />
            <FlipCard frontContent="Domingos y Festivos" backContent="8,00€" />
          </div>
        </motion.section>

        {/* Costes adicionales */}
        <motion.section 
          variants={fadeUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-[38px] text-[#14213D] font-bold text-center mb-8">Costes Adicionales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 pb-12">
            <FlipCard frontContent="Matrícula Inicial" backContent="5,00€" info="*Incluye llave de acceso*" backInfo="*Único Pago*" />
            <FlipCard frontContent="Tarjeta Socio" backContent="10,00€" info="*Gana puntos y opta a descuentos*" backInfo="*Cuota Mensual*" />
            <FlipCard frontContent="Taquilla" backContent="8,00€" info="*Alquiler de taquilla personal*" backInfo="*Cuota Mensual*" />
            <FlipCard frontContent="Rutinas" backContent="20,00€" info="Plan de 6 Días" backInfo="*Único Pago*" />
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
}