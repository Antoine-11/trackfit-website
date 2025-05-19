import { useState } from "react";

export default function ClassCard({ title, description, image, reverse }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={`flex flex-col md:${reverse ? "flex-row-reverse" : "flex-row"} bg-gray-100 overflow-hidden`}>
      {/* Imagen */}
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/2 h-64 md:h-auto object-cover"
      />

      {/* Contenido principal */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h3 className="text-[30px] text-[#14213D] font-semibold mb-2">{title}</h3>
        <p className="text-[#14213D] mb-4">{description}</p>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="self-start text-m font-medium text-[#FCA311] hover:underline focus:outline-none"
        >
          {showDetails ? "Mostrar menos" : "Ver Horario"}
        </button>

        {/* Acordeón */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${showDetails ? "max-h-96 mt-4" : "max-h-0"}`}
        >
          <div className="bg-white p-4 rounded-md shadow-inner">
            <h4 className="text-lg font-semibold mb-2">Horario</h4>
            <ul className="mb-4 text-sm text-gray-600 space-y-1">
              <li>Lunes: 9:00 - 10:00</li>
              <li>Miércoles: 18:00 - 19:00</li>
              <li>Viernes: 12:00 - 13:00</li>
            </ul>
            <button className="bg-white text-black rounded-full text-[14px] font-semibold px-6 py-4 cursor-pointer transition duration-300 ease-in-out border border-black shadow-[0_0_0_0_black] hover:-translate-y-1 hover:-translate-x-0.5 hover:bg-[#FCA311] hover:text-white hover:shadow-[2px_5px_0_0_black] active:translate-y-0.5 active:translate-x-0.5 active:shadow-[0_0_0_0_black]">
              Reserva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
