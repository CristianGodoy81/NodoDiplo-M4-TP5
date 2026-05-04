import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ItemContext } from '../context/ItemContext';
import ItemCard from '../components/ItemCard';

export default function ItemList() {
  const { items, loading } = useContext(ItemContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-gray-600 animate-pulse">Cargando países...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Países clasificados al Mundial 2026</h1>
        <Link 
          to="/items/create" 
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow transition-colors font-medium"
        >
          Agregar País
        </Link>
      </div>

      {items.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No hay países registrados. ¡Agrega uno nuevo!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map(item => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
