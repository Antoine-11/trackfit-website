import React from "react";


export default function Testimonial({ nombre, opinion, estilo, imagen }) {
  return (
    <section className="px-6 py-12 bg-white text-gray-900 space-y-12">
      {/* Testimonio */}
      <div className={estilo}>
        <div className="md:w-1/2">
          <h4 className="mt-2 font-bold text-[30px] text-[#14213D] py-8">{nombre}</h4>
          <p className="text-xl">{opinion}</p>
        </div>
        <div className="md:w-1/2">
          <img src={imagen} alt="Testimonio 1" className="rounded-xl shadow-md max-h-[370px] min-w-[527px]" />
        </div>
      </div>
    </section>
  );
}
