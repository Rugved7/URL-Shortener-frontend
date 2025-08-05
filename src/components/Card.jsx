import React from "react";

const Card = ({ icon, title, desc }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full">
      <div className="flex items-start mb-4">
        {icon && <div className="mr-4 mt-1">{icon}</div>}
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
};

export default Card;