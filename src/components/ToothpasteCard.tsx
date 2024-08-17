// src/components/ToothpasteCard.tsx
import React from "react";
import { Toothpaste } from "../types/Toothpaste";

interface ToothpasteCardProps {
  toothpaste: Toothpaste;
}

const ToothpasteCard: React.FC<ToothpasteCardProps> = ({ toothpaste }) => {
  return (
    <div className="max-w-sm rounded shadow-lg card">
      <div className="w-full">
        <img
          loading="lazy"
          className="w-full object-scale-down"
          src={toothpaste.imageUrl}
          alt={toothpaste.toothpasteName}
        />
      </div>

      <div className="px-6 py-4">
        <div className="w-full content-center">
          <div className="font-bold text-xl mb-2 text-[#33539E] ">
            {toothpaste.toothpasteName}
          </div>
        </div>
        <div>
          <p className="text-gray-700 text-base">อายุ: {toothpaste.ageGroup}</p>
          <p className="text-gray-700 text-base">
            ปริมาณฟลูออไรด์: {toothpaste.fluorideAmount} ppm
          </p>
          <p className="text-gray-700 text-base">
            สรรพคุณ: {toothpaste.benefits}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToothpasteCard;
