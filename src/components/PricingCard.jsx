import React from "react";

export default function PricingCard({ title, price, description1, description2, description3, description4, description5 }) {
  return (
    <div className="text-center rounded-lg p-6 bg-[#14213D]">
      <h3 className="text-[38px] text-white font-bold mb-2">{price}</h3>
      <p className="text-2xl font-semibold text-[#FCA311] mb-16">{title}</p>
      <div className="text-white text-[18px]">
        <p className="border-b-[1px] py-6">**{description1}**</p>
        <p className="border-b-[1px] py-6">{description2}</p>
        <p className="border-b-[1px] py-6">{description3}</p>
        <p className="border-b-[1px] py-6">{description4}</p>
        <p className="text-[#FCA311] py-6">{description5}</p>
        <button className="w-full bg-white text-black rounded-full text-[18px] font-semibold px-8 py-4 cursor-pointer transition duration-300 ease-in-out border border-black shadow-[0_0_0_0_black] hover:-translate-y-1 hover:-translate-x-0.5 hover:bg-[#FCA311] hover:text-white hover:shadow-[2px_5px_0_0_black] active:translate-y-0.5 active:translate-x-0.5 active:shadow-[0_0_0_0_black]">
          Elegir Plan
        </button>
      </div>
    </div>
  );
}
