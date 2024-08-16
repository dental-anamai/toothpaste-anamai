// src/components/ToothpasteList.tsx
import React from 'react';
import ToothpasteCard from './ToothpasteCard';
import { Toothpaste } from '../types/Toothpaste';
import { toothpastes } from '../assets/mock-toothpaste';

const ToothpasteList: React.FC = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {toothpastes.map((toothpaste: Toothpaste, index: number) => (
          <ToothpasteCard key={index} toothpaste={toothpaste} />
        ))}
      </div>
    </div>
  );
};

export default ToothpasteList;
