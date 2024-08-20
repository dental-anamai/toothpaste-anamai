// src/components/ToothpasteList.tsx
import React, { useMemo, useState, useEffect } from "react";
import ToothpasteCard from "./ToothpasteCard";
import { Toothpaste } from "../types/Toothpaste";

import Papa from "papaparse";

const ToothpasteList: React.FC = () => {
  const [csvText, setCsvText] = useState<string>("");
  const [sortedToothpastes, setSortedToothpastes] = useState<Toothpaste[]>([]);
  const [sortOption, setSortOption] = useState<string>("fluoride_desc");

  useEffect(() => {
    fetch("toothpastes.csv")
      .then((response) => response.text())
      .then((data) => setCsvText(data));
  }, []);

  const toothpastes = useMemo(() => {
    if (!csvText) return [];
    // console.log(csvText);
    const parsedData = Papa.parse<Toothpaste>(csvText, {
      header: true,
      dynamicTyping: true,
    });

    return parsedData.data;
  }, [csvText]); // Recompute if csvText changes

  useEffect(() => {
    if (toothpastes.length > 0) {
      let sorted: Toothpaste[] = [];

      switch (sortOption) {
        case "name_asc":
          sorted = toothpastes.sort((a, b) =>
            a.toothpasteName.localeCompare(b.toothpasteName)
          );
          break;
        case "name_desc":
          sorted = toothpastes.sort((a, b) =>
            b.toothpasteName.localeCompare(a.toothpasteName)
          );
          break;
        case "fluoride_asc":
          sorted = toothpastes.sort((a, b) => {
            const fluorideA = parseFloat(a.fluorideAmount) || 0;
            const fluorideB = parseFloat(b.fluorideAmount) || 0;
            return fluorideA - fluorideB; // Ascending
          });
          break;
        case "fluoride_desc":
          sorted = toothpastes.sort((a, b) => {
            const fluorideA = parseFloat(a.fluorideAmount) || 0;
            const fluorideB = parseFloat(b.fluorideAmount) || 0;
            return fluorideB - fluorideA; // Descending
          });
          break;
        default:
          break;
      }

      setSortedToothpastes([...sorted]);
    }
  }, [toothpastes, sortOption]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="container mx-auto py-4">
      <div className="mb-4">
        <label htmlFor="sortMenu" className="mr-2">
          เรียงลำดับตาม:
        </label>
        <select
          id="sortMenu"
          value={sortOption}
          onChange={handleSortChange}
          className="border rounded p-2 text-black"
        >
          <option value="name_asc">ยี่ห้อ (ก-ฮ)</option>
          <option value="name_desc">ยี่ห้อ (ฮ-ก)</option>
          <option value="fluoride_asc">ปริมาณฟลูออไรด์ (น้อย {">"} มาก)</option>
          <option value="fluoride_desc">
            ปริมาณฟลูออไรด์ (มาก {">"} น้อย)
          </option>
        </select>
      </div>

      {sortedToothpastes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedToothpastes.map((toothpaste: Toothpaste, index: number) =>
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
