import React from "react";

export default function PricingCard({ title, price, description }) {
  return (
    <div className="border rounded-2xl p-6 shadow-lg bg-white hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold text-indigo-600 mb-4">{price}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
