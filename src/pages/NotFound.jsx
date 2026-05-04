import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 text-center mt-20 flex flex-col items-center">
      <h1 className="text-9xl font-bold text-gray-300">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mt-4 mb-6">Página no encontrada</h2>
      <p className="text-gray-500 mb-8">Lo sentimos, la ruta a la que intentas acceder no existe en nuestra aplicación.</p>
      <Link 
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}
