import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Contexto
export const ItemContext = createContext();

// Componente Provider
export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // API en MockAPI
  const API_URL = 'https://69f7a01add0c226688edd8b5.mockapi.io/paises';

  // Función para obtener la lista (GET)
  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setItems(response.data); // Guardamos los países en el estado
    } catch (error) {
      console.error("Error obteniendo los datos:", error);
    } finally {
      setLoading(false);
    }
  };

  // Función para crear un nuevo item (POST)
  const createItem = async (newItem) => {
    try {
      const response = await axios.post(API_URL, newItem);
      // Actualizamos el estado local
      setItems([...items, response.data]); 
      return true; // Retornamos true si salió bien
    } catch (error) {
      console.error("Error creando el registro:", error);
      return false; // Retornamos false si hubo error
    }
  };

  // Función para actualizar un elemento (PUT)
  const updateItem = async (id, updatedItem) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedItem);
      // Actualizamos el estado local reemplazando el país modificado
      setItems(items.map(item => item.id === id ? response.data : item));
      return true;
    } catch (error) {
      console.error("Error actualizando el país:", error);
      return false;
    }
  };

  // Función para eliminar un elemento (DELETE)
  const deleteItem = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      // Actualizamos el estado local quitando el país borrado
      setItems(items.filter(item => item.id !== id));
      return true;
    } catch (error) {
      console.error("Error eliminando el país:", error);
      return false;
    }
  };

  // Ejecutamos fetchItems la primera vez que la app carga
  useEffect(() => {
    fetchItems();
  }, []);

  // Exponemos el estado y las funciones para que cualquier componente pueda usarlos
  return (
    <ItemContext.Provider value={{ items, loading, fetchItems, createItem, updateItem, deleteItem, API_URL }}>
      {children}
    </ItemContext.Provider>
  );
};
