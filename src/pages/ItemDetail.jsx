import { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ItemContext } from '../context/ItemContext';

export default function ItemDetail() {
  const { id } = useParams(); // Obtenemos el id de la URL
  const navigate = useNavigate();
  const { items, loading } = useContext(ItemContext);
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Si ya terminó de cargar la lista global, buscamos el item específico
    if (!loading) {
      const foundItem = items.find(i => i.id === id);
      if (foundItem) {
        setItem(foundItem);
      } else {
        // Si el id no existe
        navigate('/notFound');
      }
    }
  }, [id, items, loading, navigate]);

  // Si aún está cargando el contexto mundial, mostramos un loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-gray-600 animate-pulse">Cargando detalles...</p>
      </div>
    );
  }

  // Mientras resolvemos el useEffect, si aún no hay item
  if (!item) return null; 

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Lado izquierdo: Imagen grande */}
        <div className="md:w-1/2">
          <img 
            src={item.bandera} 
            alt={`Bandera de ${item.nombre}`} 
            className="w-full h-full object-cover min-h-75"
          />
        </div>

        {/* Lado derecho: Información completa */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">{item.nombre}</h1>
          
          <div className="mb-6 border-l-4 border-blue-500 pl-4 bg-blue-50 py-3 pr-3 rounded-r">
            <p className="text-gray-700 leading-relaxed text-lg">
              {item.comentario}
            </p>
          </div>

          <div className="mt-auto flex gap-4 pt-6">
            <Link 
              to="/items"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-lg transition-colors"
            >
              Volver
            </Link>
            <Link 
              to={`/items/${item.id}/edit`}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
            >
              Editar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}