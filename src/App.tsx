import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import ToothpasteList from "./components/ToothpasteList"
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <>
      <div className="bg- min-h-screen">
        <header className="bg-blue-500 text-white text-center py-4">
          <h1 className="text-2xl font-black">ยาสีฟันที่มีฟลูออไรด์ 1500 ppm</h1>
        </header>
        <main className="p-4">
          <ToothpasteList />
        </main>
      </div>
    </>
  );
}

export default App;
