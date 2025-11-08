import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegisterStore from "./pages/RegisterStore";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9fbff] text-gray-800">
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/* Página de registro de tienda */}
        <Route path="/registro-tienda" element={<RegisterStore />} />
      </Routes>
    </div>
  );
}
