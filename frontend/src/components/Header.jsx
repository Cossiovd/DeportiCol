import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo DeportiCol" className="h-8 w-auto" />
        <h1 className="text-lg font-semibold text-[#1C398E]">DeportiCol</h1>
      </div>
      <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
        Iniciar sesión
      </button>
    </header>
  );
}
