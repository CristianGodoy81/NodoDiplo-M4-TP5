import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container mx-auto px-4 text-center mt-20">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
        Los clasificados al Mundial 2026 de Estados Unidos, México y Canadá.
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Las plazas de cada confederación
      </p>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        AFC (Asia): Ocho plazas directas + una para el repechaje (Irak logró la clasificación).
      </p>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        CAF (África): Nueve plazas directas + una para el repechaje (RD Congo se clasificó).
      </p>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Concacaf (Norteamérica, Centroamérica y Caribe): Seis plazas directas (tres anfitriones y tres clasificados en las Eliminatorias) + 2 para el repechaje (Surinam y Jamaica quedaron eliminadas).
      </p>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        CONMEBOL (Sudamérica): Seis plazas directas + 1 para el repechaje (Bolivia quedó eliminada).
      </p>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        OFC (Oceanía): Una plaza directa + 1 el repechaje (Nueva Caledonia quedó eliminada).
      </p>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        UEFA (Europa): 16 plazas directas.
      </p>

      <Link 
        to="/items"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 inline-block"
      >
        Empezar a explorar
      </Link>
    </div>
  );
}
