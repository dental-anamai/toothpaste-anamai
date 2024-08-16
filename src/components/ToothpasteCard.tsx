// src/components/ToothpasteCard.tsx
import React from 'react';
import { Toothpaste } from '../types/Toothpaste';

interface ToothpasteCardProps {
  toothpaste: Toothpaste;
}

const ToothpasteCard: React.FC<ToothpasteCardProps> = ({ toothpaste }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg card">
      <img className="w-full" src={toothpaste.image} alt={toothpaste.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{toothpaste.name}</div>
        <p className="text-gray-700 text-base">
          Age Group: {toothpaste.ageGroup}
        </p>
        <p className="text-gray-700 text-base">
          Fluoride Content: {toothpaste.fluorideContent} ppm
        </p>
        <p className="text-gray-700 text-base">
          Benefits: {toothpaste.benefits}
        </p>
      </div>
    </div>
  );
};

export default ToothpasteCard;
