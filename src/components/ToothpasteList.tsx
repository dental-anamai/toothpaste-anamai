// src/components/ToothpasteList.tsx
import React, { useEffect, useMemo, useState } from "react";
import ToothpasteCard from "./ToothpasteCard";
import { Toothpaste } from "../types/Toothpaste";

import Papa from "papaparse";
import { sortFluorideAmount } from "../utils/sortFluorideAmount";

const ToothpasteList: React.FC = () => {
  const [csvText, setCsvText] = useState<string>("");

  useEffect(() => {
    fetch("/toothpastes.csv")
      .then((response) => response.text())
      .then((data) => setCsvText(data));
  }, []);

  const toothpastes = useMemo(() => {
    if (!csvText) return [];
    const parsedData = Papa.parse<Toothpaste>(csvText, {
      header: true,
      dynamicTyping: true,
    });
    const sortedFluorideAmount = sortFluorideAmount(parsedData.data);
    console.log(sortedFluorideAmount);
    return sortedFluorideAmount;
  }, [csvText]); // Recompute if csvText changes

  return (
    <div className="container mx-auto py-4">
      {toothpastes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {toothpastes.map((toothpaste: Toothpaste, index: number) =>
            toothpaste.containsFluoride &&
            Number(toothpaste.fluorideAmount) >= 1300 ? (
              <ToothpasteCard key={index} toothpaste={toothpaste} />
            ) : null
          )}
        </div>
      ) : (
        // toothepaste card skeleton
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="animate-pulse bg-gray-200 p-4 max-w-sm rounded overflow-hidden shadow-lg card">
            <div className="h-48 bg-gray-300 rounded-lg"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mt-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3 mt-2"></div>
          </div>
          <div className="animate-pulse bg-gray-200 rounded-lg p-4">
            <div className="h-48 bg-gray-300 rounded-lg"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mt-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3 mt-2"></div>
          </div>
          <div className="animate-pulse bg-gray-200 rounded-lg p-4">
            <div className="h-48 bg-gray-300 rounded-lg"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mt-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3 mt-2"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToothpasteList;
