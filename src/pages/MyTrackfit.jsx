"use client"

// src/pages/MyTrackfit.jsx
import { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import apiService from "../services/api"
import MainLayout from "../layouts/MainLayout"

const WorkoutForm = ({ onWorkoutCreated }) => {
  const [formData, setFormData] = useState({
    type: "",
    duration: "",
    comments: "",
    workout_date: new Date().toISOString().split("T")[0],
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const workoutTypes = [
    "Pecho y Tríceps",
    "Espalda y Bíceps",
    "Piernas",
    "Hombros",
    "Cardio",
    "Full Body",
    "Abdominales",
    "Funcional",
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    if (error) setError("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await apiService.createWorkout({
        ...formData,
        duration: Number.parseInt(formData.duration),
      })

      // Limpiar formulario
      setFormData({
        type: "",
        duration: "",
        comments: "",
        workout_date: new Date().toISOString().split("T")[0],
      })

      if (onWorkoutCreated) {
        onWorkoutCreated(response.workout)
      }

      // Mostrar mensaje de éxito
      alert("¡Entrenamiento registrado exitosamente!")
    } catch (error) {
      setError(error.message || "Error al registrar el entrenamiento")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-[#14213D]">Registrar Entrenamiento</h3>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Tipo de Entrenamiento</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14213D]"
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

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Duración (minutos)</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            min="1"
            max="600"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14213D]"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Fecha del Entrenamiento</label>
          <input
            type="date"
            name="workout_date"
            value={formData.workout_date}
            onChange={handleChange}
            max={new Date().toISOString().split("T")[0]}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14213D]"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Comentarios (cargas, series, repeticiones, etc.)
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14213D]"
            placeholder="Ej: Press banca: 4x8 80kg, Fondos: 3x12, Extensiones tríceps: 3x15 25kg"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#FCA311] text-[#14213D] py-2 rounded-md hover:bg-opacity-90 transition duration-300 ease-in-out border border-black shadow-[0_0_0_0_black] hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_black] active:translate-y-0.5 active:translate-x-0.5 active:shadow-[0_0_0_0_black] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:translate-x-0 disabled:hover:shadow-[0_0_0_0_black] font-semibold"
        >
          {loading ? "Registrando..." : "Registrar Entrenamiento"}
        </button>
      </form>
    </div>
  )
}

const MyTrackfit = () => {
  const { user } = useAuth()
  const [subscription, setSubscription] = useState(null)
  const [workouts, setWorkouts] = useState([])
  const [upcomingReservations, setUpcomingReservations] = useState([])
  const [pastReservations, setPastReservations] = useState([])
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadUserData()
  }, [])

  const loadUserData = async () => {
    try {
      // Cargar datos en paralelo con manejo de errores individual
      const [subscriptionData, workoutsData, reservationsData, statsData] = await Promise.allSettled([
        apiService.getActiveSubscription(),
        apiService.getWorkouts(),
        apiService.getMyReservations(), // Usar el método correcto
        apiService.getWorkoutStats(),
      ])

      // Manejar suscripción
      if (subscriptionData.status === "fulfilled" && subscriptionData.value && subscriptionData.value.subscription) {
        setSubscription(subscriptionData.value)
      } else {
        setSubscription(null)
      }

      // Manejar entrenamientos
      if (workoutsData.status === "fulfilled") {
        setWorkouts(workoutsData.value.workouts || [])
      } else {
        setWorkouts([])
      }

      // Manejar reservas - CORREGIDO para usar la estructura correcta de la API
      if (reservationsData.status === "fulfilled") {
        console.log("Datos de reservas recibidos:", reservationsData.value)
        setUpcomingReservations(reservationsData.value.upcoming_reservations || [])
        setPastReservations(reservationsData.value.past_reservations || [])
      } else {
        console.error("Error al cargar reservas:", reservationsData.reason)
        setUpcomingReservations([])
        setPastReservations([])
      }

      // Manejar estadísticas
      if (statsData.status === "fulfilled") {
        setStats(statsData.value.stats || null)
      } else {
        setStats(null)
      }
    } catch (error) {
      console.error("Error loading user data:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleWorkoutCreated = (newWorkout) => {
    setWorkouts([newWorkout, ...workouts])
    // Recargar estadísticas
    loadUserData()
  }

  const handleDeleteWorkout = async (workoutId) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este entrenamiento?")) {
      try {
        await apiService.deleteWorkout(workoutId)
        setWorkouts(workouts.filter((w) => w.id !== workoutId))
        loadUserData() // Recargar para actualizar estadísticas
      } catch (error) {
        alert("Error al eliminar el entrenamiento")
      }
    }
  }

  const handleCancelReservation = async (reservationId) => {
    if (window.confirm("¿Estás seguro de que quieres cancelar esta reserva?")) {
      try {
        await apiService.cancelReservation(reservationId)
        // Recargar las reservas después de cancelar
        loadUserData()
        alert("Reserva cancelada exitosamente")
      } catch (error) {
        console.error("Error al cancelar reserva:", error)
        alert("Error al cancelar la reserva: " + (error.message || "Error desconocido"))
      }
    }
  }

  // Función para formatear la fecha de reserva
  const formatReservationDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Función para determinar si una reserva es futura
  const isFutureReservation = (dateString) => {
    const reservationDate = new Date(dateString)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return reservationDate >= today
  }

  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-xl text-[#14213D]">Cargando...</div>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#14213D] mb-8">Mi TrackFit - {user?.name}</h1>

          {/* Información de suscripción */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#14213D]">Estado de Suscripción</h2>

            {subscription && subscription.subscription && subscription.subscription.plan ? (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="text-green-600">
                  <p className="font-semibold">Plan: {subscription.subscription.plan.name}</p>
                  <p>
                    Días restantes: <span className="font-bold">{subscription.days_remaining}</span>
                  </p>
                  <p>Vence: {new Date(subscription.subscription.end_date).toLocaleDateString("es-ES")}</p>
                </div>
                {subscription.days_remaining < 7 && (
                  <div className="mt-4 sm:mt-0">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      ⚠️ Renovación próxima
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="text-red-600">
                  <p className="font-semibold">No tienes una suscripción activa</p>
                  <p className="text-sm">Suscríbete para acceder a todas las funcionalidades</p>
                </div>
                <div className="mt-4 sm:mt-0">
                  <Link
                    to="/pricing"
                    className="inline-block bg-[#FCA311] text-[#14213D] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition border border-black shadow-[0_0_0_0_black] hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_black] active:translate-y-0.5 active:translate-x-0.5 active:shadow-[0_0_0_0_black]"
                  >
                    Ver Planes
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Reservas de clases - CORREGIDO */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[#14213D]">Mis Reservas de Clases</h2>
              <Link
                to="/book-class"
                className="bg-[#FCA311] text-[#14213D] px-4 py-2 rounded-md font-semibold hover:bg-opacity-90 transition border border-black shadow-[0_0_0_0_black] hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_black] active:translate-y-0.5 active:translate-x-0.5 active:shadow-[0_0_0_0_black]"
              >
                Nueva Reserva
              </Link>
            </div>

            {/* Próximas reservas */}
            <>
              {upcomingReservations.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-[#14213D] mb-3">Próximas Clases</h3>
                  <div className="space-y-3">
                    {upcomingReservations.map((reservation) => (
                      <div key={reservation.id} className="border-l-4 border-green-500 pl-4 bg-green-50 p-3 rounded">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-[#14213D]">
                              {reservation.gym_class?.name || "Clase no disponible"}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {formatReservationDate(reservation.reservation_date)}
                            </p>
                            <p className="text-sm text-gray-600">
                              Horario: {reservation.gym_class?.start_time} - {reservation.gym_class?.end_time}
                            </p>
                            {reservation.gym_class?.description && (
                              <p className="text-xs text-gray-500 mt-1">{reservation.gym_class.description}</p>
                            )}
                            <p className="text-xs text-gray-500 mt-1">
                              Estado: <span className="font-medium">{reservation.status}</span>
                            </p>
                          </div>
                          {reservation.status === "confirmed" && (
                            <button
                              onClick={() => handleCancelReservation(reservation.id)}
                              className="text-red-500 hover:text-red-700 ml-2 p-1"
                              title="Cancelar reserva"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Reservas pasadas */}
              {pastReservations.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-[#14213D] mb-3">Clases Anteriores</h3>
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {pastReservations.map((reservation) => (
                      <div key={reservation.id} className="border-l-4 border-gray-400 pl-4 bg-gray-50 p-3 rounded">
                        <div>
                          <h4 className="font-semibold text-gray-700">
                            {reservation.gym_class?.name || "Clase no disponible"}
                          </h4>
                          <p className="text-sm text-gray-600">{formatReservationDate(reservation.reservation_date)}</p>
                          <p className="text-sm text-gray-600">
                            Horario: {reservation.gym_class?.start_time} - {reservation.gym_class?.end_time}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Estado: <span className="font-medium">{reservation.status}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mensaje cuando no hay reservas */}
              {upcomingReservations.length === 0 && pastReservations.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">No tienes reservas de clases aún.</p>
                  <Link to="/classes" className="text-[#FCA311] hover:underline">
                    Ver clases disponibles
                  </Link>
                </div>
              )}
            </>
          </div>

          {/* Estadísticas */}
          {stats && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-lg font-semibold text-[#14213D] mb-2">Total Entrenamientos</h3>
                <p className="text-3xl font-bold text-[#FCA311]">{stats.total_workouts}</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-lg font-semibold text-[#14213D] mb-2">Tiempo Total</h3>
                <p className="text-3xl font-bold text-[#FCA311]">{Math.round(stats.total_minutes / 60)}h</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-lg font-semibold text-[#14213D] mb-2">Promedio</h3>
                <p className="text-3xl font-bold text-[#FCA311]">{stats.average_duration}min</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-lg font-semibold text-[#14213D] mb-2">Este Mes</h3>
                <p className="text-3xl font-bold text-[#FCA311]">{stats.this_month_workouts}</p>
              </div>
            </div>
          )}

          {/* Formulario y lista de entrenamientos */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <WorkoutForm onWorkoutCreated={handleWorkoutCreated} />

            {/* Lista de entrenamientos */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#14213D]">Últimos Entrenamientos</h3>
              {workouts.length > 0 ? (
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {workouts.slice(0, 10).map((workout) => (
                    <div key={workout.id} className="border-l-4 border-[#FCA311] pl-4 bg-gray-50 p-3 rounded">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#14213D]">{workout.type}</h4>
                          <p className="text-sm text-gray-600">
                            {workout.duration} minutos - {new Date(workout.workout_date).toLocaleDateString("es-ES")}
                          </p>
                          {workout.comments && (
                            <p className="text-sm text-gray-700 mt-1 bg-white p-2 rounded border">{workout.comments}</p>
                          )}
                        </div>
                        <button
                          onClick={() => handleDeleteWorkout(workout.id)}
                          className="text-red-500 hover:text-red-700 ml-2 p-1"
                          title="Eliminar entrenamiento"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">No tienes entrenamientos registrados aún.</p>
                  <p className="text-sm text-gray-400">¡Registra tu primer entrenamiento usando el formulario!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default MyTrackfit