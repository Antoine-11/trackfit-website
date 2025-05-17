import React from "react";
import MainLayout from "../layouts/MainLayout";
import TrainingCard from "../components/TrainingCard";
import LastTraining from "../components/LastTraining";
import Slider from "../components/Slider";

export default function Trainings() {
  const trainingLevels = [
    {
      title: "Entrenamiento Básico",
      description: "Ideal para principiantes. Incluye ejercicios de movilidad, fuerza ligera y cardio moderado.",
    },
    {
      title: "Entrenamiento Intermedio",
      description: "Perfecto para quienes ya tienen experiencia. Combinamos fuerza, resistencia y técnicas avanzadas.",
    },
    {
      title: "Entrenamiento Avanzado",
      description: "Alto rendimiento con cargas elevadas, intervalos intensos y planificación detallada.",
    },
  ];

  const lastTraining = {
    date: "28/04/2025",
    type: "Entrenamiento Intermedio",
    duration: "60 minutos",
    focus: "Resistencia y Core",
    trainer: "Carlos Ruiz",
  };

  return (
    <MainLayout>
      {/* Slider */}
      <Slider title="ENTRENAMIENTOS" />

      {/* Texto informativo */}
      <section className="px-6 py-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Planes adaptados a tu nivel</h2>
        <p className="text-gray-700 text-lg">
          En TrackFit ofrecemos entrenamientos según tu experiencia y objetivos. Ya seas principiante o atleta, tenemos un plan para ti.
        </p>
      </section>

      {/* Grid de niveles de entrenamiento */}
      <section className="px-6 py-12 max-w-6xl mx-auto grid gap-8">
        {trainingLevels.map((level, i) => (
          <TrainingCard key={i} title={level.title} description={level.description} />
        ))}
      </section>

      {/* Último entrenamiento registrado */}
      <LastTraining training={lastTraining} />
    </MainLayout>
  );
}
