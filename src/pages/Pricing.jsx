import React from "react";
import PricingCard from "../components/PricingCard";
import MainLayout from "../layouts/MainLayout";
import Slider from "../components/Slider";
import ExtraCosts from "../components/ExtraCosts";

export default function Pricing() {
  const pricingPlans = [
    { title: "Mensual", price: "30€", description: "Acceso completo durante 1 mes." },
    { title: "Trimestral", price: "80€", description: "Acceso completo durante 3 meses." },
    { title: "Semestral", price: "150€", description: "Acceso completo durante 6 meses." },
    { title: "Anual", price: "280€", description: "Acceso completo durante 12 meses." },
  ];

  return (
    <MainLayout>
    <div className="space-y-16">
      {/* Slider */}
      <Slider title="TARIFAS" />

      {/* Descripción */}
      <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
        <h2 className="text-3xl font-bold">Nuestras Tarifas</h2>
        <p className="text-gray-600">
          Elige el plan que mejor se adapte a tus objetivos y estilo de vida. Flexibilidad y beneficios exclusivos.
        </p>
      </div>

      {/* Tarifas principales */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {pricingPlans.map((plan, idx) => (
          <PricingCard
            key={idx}
            title={plan.title}
            price={plan.price}
            description={plan.description}
          />
        ))}
      </div>

      {/* Costes adicionales */}
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <h3 className="text-2xl font-semibold text-center">Costes adicionales</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ExtraCosts estilo="bg-white border rounded-xl p-4 text-center shadow-sm hover:shadow-md transition" servicio="Matrícula inicial: " precio="20€" />
          <ExtraCosts estilo="bg-white border rounded-xl p-4 text-center shadow-sm hover:shadow-md transition" servicio="Matrícula inicial: " precio="20€" />
          <ExtraCosts estilo="bg-white border rounded-xl p-4 text-center shadow-sm hover:shadow-md transition" servicio="Matrícula inicial: " precio="20€" />
          <ExtraCosts estilo="bg-white border rounded-xl p-4 text-center shadow-sm hover:shadow-md transition" servicio="Matrícula inicial: " precio="20€" />
        </div>
          <ExtraCosts estilo="bg-white border rounded-xl p-4 text-center shadow-sm hover:shadow-md transition max-w-md mx-auto" servicio="Matricula inicial: " precio="20€" />
      </div>
    </div>
    </MainLayout>
  );
}
