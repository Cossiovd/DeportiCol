export default function CardDeporte({ nombre, img }) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-200">
      <img src={img} alt={nombre} className="h-40 w-full object-contain bg-gray-100 p-4" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{nombre}</h3>
        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Ver más
        </button>
      </div>
    </div>
  );
}
