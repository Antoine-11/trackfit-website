
import React from "react";

export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white text-center p-6 border-[2px] border-[#FCA311] rounded-lg shadow-lg hover:shadow-2xl transition hover:translate-y-[-10px]">
      {icon && (
        <img
          src={icon}
          alt={`${title} icon`}
          className="w-12 h-12 mx-auto mb-2"
        />
      )}
      <h3 className="text-xl text-[#14213D] font-bold pb-[8px] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
