import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ItemContext } from '../context/ItemContext';
import { toast } from 'react-toastify';

export default function ItemCreate() {
  const { createItem } = useContext(ItemContext);
  const navigate = useNavigate();
  
  // Estado local para los campos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    bandera: '',
    comentario: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica
    if (!formData.nombre || !formData.bandera || !formData.comentario) {
      toast.error("Por favor, completa todos los campos.");
      return;
    }

    // Llamamos a la función del contexto
    const success = await createItem(formData);

    if (success) {
      toast.success("¡País agregado correctamente!");
      navigate('/items'); // Redirigimos al listado
    } else {
      toast.error("Hubo un error al guardar el país.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Agregar Nuevo País</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Nombre del País</label>
            <input 
              type="text" 
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej: Argentina"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">URL de la Bandera (Imagen)</label>
            <input 
              type="url" 
              name="bandera"
              value={formData.bandera}
              onChange={handleChange}
              placeholder="https://ejemplo.com/bandera.jpg"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Comentario / Descripción</label>
            <textarea 
              name="comentario"
              value={formData.comentario}
              onChange={handleChange}
              rows="4"
              placeholder="Escribe un comentario sobre el país..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="flex justify-end gap-4 mt-4">
            <Link 
              to="/items"
              className="px-6 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors"
            >
              Cancelar
            </Link>
            <button 
              type="submit"
              className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Guardar País
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}