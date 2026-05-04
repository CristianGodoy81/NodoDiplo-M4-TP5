import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

export default function ItemCard({ item }) {
  const { deleteItem } = useContext(ItemContext);

  const handleDelete = () => {
    Swal.fire({
      title: `¿Eliminar ${item.nombre}?`,
      text: "No podrás revertir esta acción.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      // Si el usuario hace clic en "Sí, eliminar"
      if (result.isConfirmed) {
        const success = await deleteItem(item.id);
        
        if (success) {
          toast.success(`${item.nombre} eliminado.`);
        } else {
          toast.error("Hubo un error al eliminar.");
        }
      }
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform hover:scale-105">
      {/* Imagen de la bandera */}
      <img 
        src={item.bandera} 
        alt={`Bandera de ${item.nombre}`} 
        className="w-full h-48 object-cover"
      />
      
      {/* Contenido de la tarjeta */}
      <div className="p-4 grow flex flex-col">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{item.nombre}</h2>
        
        {/* Botones de acción */}
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200">
          <Link 
            to={`/items/${item.id}`} 
            className="text-blue-500 hover:text-blue-700 font-semibold text-sm"
          >
            Ver Detalles
          </Link>
          <div className="flex gap-2">
            <Link 
              to={`/items/${item.id}/edit`} 
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm transition-colors"
            >
              Editar
            </Link>
            <button 
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
              onClick={handleDelete}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
