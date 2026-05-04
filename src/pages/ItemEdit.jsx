import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ItemContext } from '../context/ItemContext';
import { toast } from 'react-toastify';

export default function ItemEdit() {
  const { id } = useParams();
  const { items, updateItem, loading } = useContext(ItemContext);
  const navigate = useNavigate();
  
  // Estado local para los campos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    bandera: '',
    comentario: ''
  });

  // Buscamos y precargamos los datos del país a editar
  useEffect(() => {
    if (!loading) {
      const foundItem = items.find(i => i.id === id);
      if (foundItem) {
        setFormData({
          nombre: foundItem.nombre,
          bandera: foundItem.bandera,
          comentario: foundItem.comentario
        });
      } else {
        toast.error("País no encontrado");
        navigate('/items');
      }
    }
  }, [id, items, loading, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.bandera || !formData.comentario) {
      toast.error("Por favor, completa todos los campos.");
      return;
    }

    // Llamamos a la función de actualización pasando el id
    const success = await updateItem(id, formData);

    if (success) {
      toast.success("¡País actualizado correctamente!");
      navigate(`/items/${id}`); // Volvemos a la vista del detalle
    } else {
      toast.error("Hubo un error al actualizar el país.");
    }
  };

  if (loading) return null; // Prevenimos renderizados vacíos mientras carga el contexto

  return (
    <div className="container mx-auto px-4 py-10 max-w-xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Editar País</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Nombre del País</label>
            <input 
              type="text" 
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">URL de la Bandera</label>
            <input 
              type="url" 
              name="bandera"
              value={formData.bandera}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Comentario</label>
            <textarea 
              name="comentario"
              value={formData.comentario}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="flex justify-end gap-4 mt-4">
            <Link 
              to={`/items/${id}`}
              className="px-6 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors"
            >
              Cancelar
            </Link>
            <button 
              type="submit"
              className="px-6 py-2 rounded-lg bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition-colors"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
