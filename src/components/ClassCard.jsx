
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

const ClassCard = ({ title, description, image, reverse }) => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const handleReserve = () => {
    if (!isAuthenticated) {
      // Si no está logueado, redirigir a login
      navigate("/auth")
    } else {
      // Si está logueado, redirigir a reservas con la clase preseleccionada
      navigate(`/book-class?class=${encodeURIComponent(title)}`)
    }
  }

  return (
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center`}>
      <div className="md:w-1/2">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-64 md:h-80 object-cover" />
      </div>
      <div className="md:w-1/2 p-8 bg-white">
        <h3 className="text-2xl font-bold mb-4 text-[#14213D]">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <button
          onClick={handleReserve}
          className="bg-[#FCA311] text-[#14213D] px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition border border-black shadow-[0_0_0_0_black] hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_black] active:translate-y-0.5 active:translate-x-0.5 active:shadow-[0_0_0_0_black]"
        >
          Reservar Clase
        </button>
      </div>
    </div>
  )
}

export default ClassCard
