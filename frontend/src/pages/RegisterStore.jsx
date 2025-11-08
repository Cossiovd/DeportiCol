import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import logo from "../assets/logo.svg";

export default function RegisterStore() {
  const [formData, setFormData] = useState({
    name: "",
    nit: "",
    city: "",
    product: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado (simulado)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col">
        <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo DeportiCol" className="h-8 w-auto" />
              <h1 className="text-lg font-semibold text-[#1C398E]">DeportiCol</h1>
            </div>
            <Link to="/" className="text-blue-600 text-sm hover:underline">
              ← Volver al inicio
            </Link>
        </header>

      {/* Main */}
      <main className="flex-1 container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-10 gap-10">
        {/* Lado Izquierdo */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl font-extrabold text-[#1C398E] mb-3">
            Únete a la comunidad DeportiCol
          </h1>
          <p className="text-gray-600 mb-6 max-w-md">
            Digitaliza tu negocio y llega a miles de deportistas en Colombia.
          </p>
          <img
            src="/src/assets/bicicleta.png"
            alt="Ciclista en montaña"
            className="rounded-2xl shadow-lg max-w-md"
          />
        </div>

        {/* Lado Derecho - Formulario */}
        <div className="md:w-1/2 bg-white rounded-2xl shadow-md p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-[#1C398E] mb-6">
            Crea tu cuenta de tienda
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre de la tienda *
              </label>
              <input
                name="name"
                type="text"
                placeholder="Ej: Deportes El Campeón"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                NIT *
              </label>
              <input
                name="nit"
                type="text"
                placeholder="Ej: 900123456-7"
                value={formData.nit}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ciudad *
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Selecciona tu ciudad</option>
                <option value="Bogotá">Bogotá</option>
                <option value="Medellín">Medellín</option>
                <option value="Cali">Cali</option>
                <option value="Barranquilla">Barranquilla</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tipo de producto principal *
              </label>
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Selecciona el tipo de producto</option>
                <option value="Ropa deportiva">Ropa deportiva</option>
                <option value="Equipos">Equipos</option>
                <option value="Accesorios">Accesorios</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Correo electrónico *
              </label>
              <input
                name="email"
                type="email"
                placeholder="tu@correo.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contraseña *
              </label>
              <input
                name="password"
                type="password"
                placeholder="Mínimo 8 caracteres"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirmar contraseña *
              </label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Repite tu contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Crear cuenta
            </button>

            <p className="text-xs text-gray-500 mt-3 text-center">
              Al crear la cuenta, aceptas nuestros{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Términos y Condiciones
              </a>{" "}
              y{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Política de Privacidad
              </a>
              .
            </p>

            <p className="text-sm text-gray-600 mt-2 text-center">
              ¿Ya tienes cuenta?{" "}
              <a href="#" className="text-blue-600 font-semibold hover:underline">
                Inicia sesión aquí
              </a>
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
