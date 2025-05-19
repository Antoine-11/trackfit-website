import React from "react";
import { motion } from "framer-motion";
import PricingCard from "../components/PricingCard";
import MainLayout from "../layouts/MainLayout";
import Slider from "../components/Slider";
import FlipCard from "../components/FlipCard";

import sliderImage from "../assets/images/plancha.jpg";

// Animación fadeUp
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Pricing() {
  const pricingPlans = [
    {
      title: "1 MES",
      price: "30,00€",
      description1: "--",
      description2: "Sin contrato",
      description3: "Sin Permanencia",
      description4: "Sin Domiciliación",
      description5: "--",
    },
    {
      title: "3 MESES",
      price: "80,00€",
      description1: "26,67€ Mensual",
      description2: "Sin contrato",
      description3: "Sin Permanencia",
      description4: "Sin Domiciliación",
      description5: "¡¡40,00€ de Ahorro Anual!!",
    },
    {
      title: "6 MESES",
      price: "150,00€",
      description1: "25,00€ Mensual",
      description2: "Sin contrato",
      description3: "Sin Permanencia",
      description4: "Sin Domiciliación",
      description5: "¡¡60,00€ de Ahorro Anual!!",
    },
    {
      title: "12 MESES",
      price: "280,00€",
      description1: "23,33€ Mensual",
      description2: "Sin contrato",
      description3: "Sin Permanencia",
      description4: "Sin Domiciliación",
      description5: "¡¡80,00€ de Ahorro Anual!!",
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-16">
        {/* Slider */}
        <Slider heroImg={sliderImage} title="TARIFAS" />

        {/* Descripción */}
        <motion.div className="max-w-5xl mx-auto px-4 text-center space-y-4" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8 }} >
          <p className="text-[#14213D] text-[22px]">
            ¡Elige el plan que mejor se adapte a tus objetivos y estilo de vida! Flexibilidad y beneficios exclusivos.
          </p>
        </motion.div>

        {/* Tarifas principales */}
        <motion.section className="py-12 px-4 max-w-[1600px] mx-auto w-full" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, idx) => (
              <PricingCard
                key={idx}
                title={plan.title}
                price={plan.price}
                description1={plan.description1}
                description2={plan.description2}
                description3={plan.description3}
                description4={plan.description4}
                description5={plan.description5}
              />
            ))}
          </div>
        </motion.section>

        {/* Días sueltos */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} >
          <h2 className="text-[38px] text-[#14213D] font-bold text-center mb-8">Días Sueltos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
            <FlipCard frontContent="Lunes a Sábado" backContent="5,00€" />
            <FlipCard frontContent="Domingos y Festivos" backContent="8,00€" />
          </div>
        </motion.section>

        {/* Costes adicionales */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} >
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
