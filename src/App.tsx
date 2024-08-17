import { useEffect } from "react";
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
      <div className="min-h-screen bg-cover">
        <header className="bg-blue-500 text-white text-center py-4">
          <h1 className="text-2xl font-black">ยาสีฟันฟลูออไรด์ 1500 ppm ที่กรมอนามัยแนะนำ</h1>
        </header>
        <main className="p-4 w-full h-full">
          <ToothpasteList />
        </main>
      </div>
    </>
  );
}

export default App;
