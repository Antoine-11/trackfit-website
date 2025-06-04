
import React, { useState } from 'react';
import apiService from '../services/api';

const WorkoutForm = ({ onWorkoutCreated }) => {
  const [formData, setFormData] = useState({
    type: '',
    duration: '',
    comments: '',
    workout_date: new Date().toISOString().split('T')[0],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const workoutTypes = [
    'Pecho y Tríceps',
    'Espalda y Bíceps',
    'Piernas',
    'Hombros',
    'Cardio',
    'Full Body',
    'Abdominales',
    'Funcional',
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await apiService.createWorkout({
        ...formData,
        duration: parseInt(formData.duration),
      });
      
      // Limpiar formulario
      setFormData({
        type: '',
        duration: '',
        comments: '',
        workout_date: new Date().toISOString().split('T')[0],
      });

      if (onWorkoutCreated) {
        onWorkoutCreated(response.workout);
      }

      alert('Entrenamiento registrado exitosamente!');
    } catch (error) {
      setError(error.message || 'Error al registrar el entrenamiento');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Registrar Entrenamiento</h3>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tipo de Entrenamiento
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Selecciona un tipo</option>
            {workoutTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Duración (minutos)
          </label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            min="1"
            max="600"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Fecha del Entrenamiento
          </label>
          <input
            type="date"
            name="workout_date"
            value={formData.workout_date}
            onChange={handleChange}
            max={new Date().toISOString().split('T')[0]}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Comentarios (cargas, series, repeticiones, etc.)
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ej: Press banca: 4x8 80kg, Fondos: 3x12, Extensiones tríceps: 3x15 25kg"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
        >
          {loading ? 'Registrando...' : 'Registrar Entrenamiento'}
        </button>
      </form>
    </div>
  );
};

export default WorkoutForm;