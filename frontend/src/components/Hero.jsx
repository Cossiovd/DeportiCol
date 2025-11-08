import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between container mx-auto px-8 py-16 gap-10">
      <div className="flex-1">
        <h2 className="text-4xl font-extrabold text-[#1C398E] mb-4 leading-snug">
          Conecta tu tienda deportiva<br />
          con todo Colombia
        </h2>
        <p className="text-gray-600 mb-6 max-w-md">
          Digitaliza tu negocio deportivo, gestiona tu inventario y alcanza nuevos clientes en toda Colombia.
        </p>

        <div className="flex gap-4">
          <Link to="/registro-tienda"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition">
            Registrar tienda
          </Link>
          <button className="border border-blue-600 text-blue-600 px-5 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
            Explorar productos
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src="./src/assets/banner.png"
          alt="Jugador de fútbol"
          className="rounded-2xl shadow-xl max-w-md"
        />
      </div>
    </section>
  );
}
