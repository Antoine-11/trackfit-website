import { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import apiService from "../services/api"

const BookClass = () => {
  const [searchParams] = useSearchParams()
  const preselectedClass = searchParams.get("class")

  const [classes, setClasses] = useState([])
  const [selectedClass, setSelectedClass] = useState(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [loading, setLoading] = useState(false)
  const [loadingClasses, setLoadingClasses] = useState(true)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const { user } = useAuth()
  const navigate = useNavigate()

  // Cargar clases desde la API
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        setLoadingClasses(true)
        const response = await apiService.getClasses()
        setClasses(response.classes || [])

        // Si hay una clase preseleccionada, buscarla
        if (preselectedClass) {
          const foundClass = response.classes?.find((cls) => cls.name.toLowerCase() === preselectedClass.toLowerCase())
          if (foundClass) {
            setSelectedClass(foundClass)
          }
        }
      } catch (error) {
        console.error("Error al cargar clases:", error)
        setError("Error al cargar las clases disponibles")
      } finally {
        setLoadingClasses(false)
      }
    }

    fetchClasses()
  }, [preselectedClass])

  // Resetear fecha cuando cambia la clase
  useEffect(() => {
    setSelectedDate("")
  }, [selectedClass])

  // Función para obtener las próximas fechas disponibles para una clase
  const getAvailableDates = () => {
    if (!selectedClass) return []

    const dates = []
    const today = new Date()

    // Buscar las próximas 4 semanas
    for (let i = 0; i < 28; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      const dayName = date.toLocaleDateString("en-US", { weekday: "long" }).toLowerCase()

      if (dayName === selectedClass.day_of_week) {
        dates.push({
          value: date.toISOString().split("T")[0], // YYYY-MM-DD
          label: date.toLocaleDateString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        })
      }
    }

    return dates
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!selectedClass || !selectedDate) {
      setError("Por favor, selecciona clase y fecha")
      return
    }

    setLoading(true)
    setError("")

    try {
      const reservationData = {
        class_id: selectedClass.id,
        reservation_date: selectedDate,
      }

      console.log("Enviando datos de reserva:", reservationData)

      await apiService.createReservation(reservationData)

      setSuccess("¡Reserva realizada exitosamente!")

      setTimeout(() => {
        navigate("/my-trackfit")
      }, 2000)
    } catch (error) {
      console.error("Error al crear reserva:", error)
      setError(error.message || "Error al realizar la reserva")
    } finally {
      setLoading(false)
    }
  }

  if (loadingClasses) {
    return (
      <MainLayout>
        <div className="min-h-screen bg-gray-100 py-8">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#14213D] mx-auto"></div>
              <p className="mt-4 text-gray-600">Cargando clases disponibles...</p>
            </div>
          </div>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#14213D] mb-4">Reservar Clase</h1>
            <p className="text-gray-600">Hola {user?.name}, selecciona tu clase preferida</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">{error}</div>
            )}

            {success && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">1. Selecciona la clase</label>
                <select
                  value={selectedClass?.id || ""}
                  onChange={(e) => {
                    const classId = Number.parseInt(e.target.value)
                    const foundClass = classes.find((cls) => cls.id === classId)
                    setSelectedClass(foundClass || null)
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14213D] focus:border-transparent"
                  required
                >
                  <option value="">Elige una clase...</option>
                  {classes.map((gymClass) => (
                    <option key={gymClass.id} value={gymClass.id}>
                      {gymClass.name} - {gymClass.day_of_week} ({gymClass.start_time} - {gymClass.end_time})
                      {gymClass.available_spots !== undefined && ` - ${gymClass.available_spots} plazas disponibles`}
                    </option>
                  ))}
                </select>
              </div>

              {selectedClass && (
                <div className="bg-blue-50 p-4 rounded-md">
                  <h3 className="font-semibold text-[#14213D] mb-2">Información de la clase:</h3>
                  <p>
                    <strong>Nombre:</strong> {selectedClass.name}
                  </p>
                  <p>
                    <strong>Descripción:</strong> {selectedClass.description}
                  </p>
                  <p>
                    <strong>Día:</strong> {selectedClass.day_of_week}
                  </p>
                  <p>
                    <strong>Horario:</strong> {selectedClass.start_time} - {selectedClass.end_time}
                  </p>
                  <p>
                    <strong>Capacidad máxima:</strong> {selectedClass.max_capacity} personas
                  </p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">2. Selecciona la fecha</label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14213D] focus:border-transparent"
                  disabled={!selectedClass}
                  required
                >
                  <option value="">{selectedClass ? "Elige una fecha..." : "Primero selecciona una clase"}</option>
                  {getAvailableDates().map((date) => (
                    <option key={date.value} value={date.value}>
                      {date.label}
                    </option>
                  ))}
                </select>
              </div>

              {selectedClass && selectedDate && (
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-semibold text-[#14213D] mb-2">Resumen de tu reserva:</h3>
                  <p>
                    <strong>Clase:</strong> {selectedClass.name}
                  </p>
                  <p>
                    <strong>Fecha:</strong>{" "}
                    {new Date(selectedDate).toLocaleDateString("es-ES", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p>
                    <strong>Horario:</strong> {selectedClass.start_time} - {selectedClass.end_time}
                  </p>
                </div>
              )}

              <div className="flex gap-4">
                <Link
                  to="/classes"
                  className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-md text-center hover:bg-gray-600 transition"
                >
                  Volver a Clases
                </Link>
                <button
                  type="submit"
                  disabled={loading || !selectedClass || !selectedDate}
                  className="flex-1 bg-[#14213D] text-white py-3 px-6 rounded-md hover:bg-[#1f2e57] transition disabled:opacity-50 disabled:cursor-not-allowed border border-black shadow-[0_0_0_0_black] hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_black] active:translate-y-0.5 active:translate-x-0.5 active:shadow-[0_0_0_0_black] disabled:hover:translate-y-0 disabled:hover:translate-x-0 disabled:hover:shadow-[0_0_0_0_black]"
                >
                  {loading ? "Reservando..." : "Confirmar Reserva"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default BookClass
