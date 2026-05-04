import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../pages/Home';
import ItemList from '../pages/ItemList';
import ItemDetail from '../pages/ItemDetail';
import ItemCreate from '../pages/ItemCreate';
import ItemEdit from '../pages/ItemEdit';
import NotFound from '../pages/NotFound';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<ItemList />} />
          <Route path="/items/create" element={<ItemCreate />} />
          <Route path="/items/:id" element={<ItemDetail />} />
          <Route path="/items/:id/edit" element={<ItemEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
