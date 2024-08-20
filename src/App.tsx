import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";

import tooth from "/tooth.svg";
import toothpaste from "/toothpaste.svg";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import ToothpasteList from "./components/ToothpasteList";
import BackToTopButton from "./components/BackToTopButton";
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
      <div className="min-h-screen bg-cover">
        <header className="text-white text-center py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
          <h1 className="text-2xl font-black">
            <img src={toothpaste} alt="toothpaste icon" className="inline" />
            ยาสีฟันฟลูออไรด์ 1500 ppm ที่กรมอนามัยแนะนำ
            <img src={tooth} alt="tooth icon" className="inline" />
          </h1>
        </header>
        <main className="p-4 w-full h-full">
          <ToothpasteList />
        </main>
        <BackToTopButton />
      </div>
    </>
  );
}

export default App;
