// src/components/ToothpasteCard.tsx
import React, { useState } from "react";
import { Toothpaste } from "../types/Toothpaste";

interface ToothpasteCardProps {
  toothpaste: Toothpaste;
}

const ToothpasteCard: React.FC<ToothpasteCardProps> = ({ toothpaste }) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const toothpasteBrand: string =
    toothpaste.toothpasteName.indexOf(" รุ่น") > 0
      ? toothpaste.toothpasteName.slice(
          0,
          toothpaste.toothpasteName.indexOf(" รุ่น") + 1
        )
      : toothpaste.toothpasteName;
  const toothpasteName: string =
    toothpaste.toothpasteName.indexOf(" รุ่น") > 0
      ? toothpaste.toothpasteName.slice(
          toothpaste.toothpasteName.indexOf(" รุ่น") + 1
        )
      : "";
  return (
    <div className="max-w-sm rounded shadow-lg card">
      <div className="w-full shadow">
        {!imageLoaded && (
          <div className="w-full h-64 bg-gray-200 animate-pulse rounded-t-lg"></div>
        )}
        <img
          loading="lazy"
          className="w-full object-contain object-top rounded-t-lg"
          src={"toothpaste-images/Picture" + toothpaste.id + ".png"}
          alt={toothpaste.toothpasteName}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className="px-6 py-4">
        <div className="w-full content-center mb-2">
          <div className="font-bold text-balance text-lg bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            {toothpasteBrand}
          </div>
          <div className="font-bold text-balance text-md text-[#33539E] ">
            {toothpasteName}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-gray-700 text-base text-start">อายุ:</div>
          <div className="text-gray-700 text-base text-start">
            {toothpaste.ageGroup || "ไม่ระบุ"}
          </div>

          <div className="text-gray-700 text-base text-start">
            ปริมาณฟลูออไรด์:
          </div>
          <div className="text-gray-700 text-base text-start">
            {toothpaste.fluorideAmount} ppm
          </div>

          <div className="text-gray-700 text-base text-start">สรรพคุณ:</div>
          <div className="text-gray-700 text-base text-start text-pretty">
            {toothpaste.benefits}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToothpasteCard;
