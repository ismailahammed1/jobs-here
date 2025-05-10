// components/CategoryCard.jsx
import React from "react";

const CategoryCard = ({ icon, name, description }) => (
  <div className="w-64 bg-white rounded-lg hover:border hover:border-red-600 shadow p-6 flex flex-col items-center space-y-4 hover:-translate-y-2 duration-500 transition">
    <div className="text-red-500 text-4xl mb-2">{icon}</div>
    <h4 className="font-bold text-lg text-center">{name}</h4>
    <p className="text-xs text-gray-500 text-center">{description}</p>
  </div>
);

export default CategoryCard;