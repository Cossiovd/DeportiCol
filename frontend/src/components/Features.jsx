import gestionInventario from "../assets/gestioninventario.svg";
import alcanceNacional from "../assets/alcancenacional.svg";
import comunidadDeportiva from "../assets/comunidaddeportiva.svg";

export default function Features() {
  const items = [
    {
      icon: gestionInventario,
      title: "Gestión de Inventario",
      text: "Administra tus productos, precios y stock desde un panel intuitivo y fácil de usar.",
    },
    {
      icon: alcanceNacional,
      title: "Alcance Nacional",
      text: "Conecta con clientes de todo el país y expande tu negocio más allá de tu ciudad.",
    },
    {
      icon: comunidadDeportiva,
      title: "Comunidad Deportiva",
      text: "Únete a una red de emprendedores deportivos, comparte experiencias y crece juntos.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8 text-center">
        <h3 className="text-2xl font-bold text-[#1C398E] mb-2">
          ¿Por qué DeportiCol?
        </h3>
        <p className="text-gray-600 mb-10">
          Todo lo que necesitas para llevar tu tienda deportiva al siguiente nivel
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-[#f9fbff] rounded-2xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-start"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 mb-4"
              />
              <h4 className="font-semibold text-lg mb-2 text-gray-800">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm text-left">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
