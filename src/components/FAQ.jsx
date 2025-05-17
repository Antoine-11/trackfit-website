import React from "react";

export default function FAQ() {
  return (
    <section className="px-6 py-12 bg-[#E5E5E5] text-gray-900">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-8">
        <div className="md:w-1/3">
          <h2 className="text-[38px] text-[#14213D] font-semibold mb-4">Preguntas frecuentes</h2>
          <p>Resolvemos tus dudas más comunes sobre horarios, tarifas, clases y más.</p>
        </div>
        <div className="md:w-2/3 h-64 overflow-y-auto bg-white p-6 rounded-lg shadow-inner">
          <ul className="space-y-4">
            <li>
              <strong>¿Qué horario tiene el gimnasio?</strong><br />
              Estamos abiertos de L-V de 7:00 a 23:00 h. Sábados y Domingos de 8:00 a 14:00.
            </li>
            <li>
              <strong>¿Hay entrenamientos personalizados?</strong><br />
              Sí, con cita previa puedes acceder a rutinas y seguimiento individual. Nuestro personal está cualificado para asesoraros de cualquier manera.
            </li>
            <li>
              <strong>¿Ofrecen clases para principiantes?</strong><br />
              Absolutamente. Tenemos niveles para todos.
            </li>
            <li>
              <strong>¿Abren los días festivos?</strong><br />
              ¡Sí, estamos abiertos los 365 días del año! No te preocupes, nosotros también somos frikis. 
            </li>
            <li>
              <strong>¿Disponéis de día de prueba?</strong><br />
              El primer día que asistas al gimnasio puedes probar gratis sin ningún problema. Entendemos que primero tienes que probar lo que vas a usar para esculpir tu cuerpo.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
