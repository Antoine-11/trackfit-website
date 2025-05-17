import React from "react";

export default function LastTraining({ training }) {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Último Entrenamiento Registrado</h2>
      <div className="bg-gray-100 p-6 rounded-lg shadow-inner space-y-2">
        <p><strong>Fecha:</strong> {training.date}</p>
        <p><strong>Tipo:</strong> {training.type}</p>
        <p><strong>Duración:</strong> {training.duration}</p>
        <p><strong>Enfoque:</strong> {training.focus}</p>
        <p><strong>Entrenador:</strong> {training.trainer}</p>
      </div>
    </section>
  );
}
