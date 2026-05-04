import AppRouter from './router/AppRouter';
import { ItemProvider } from './context/ItemContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ItemProvider>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <AppRouter />
        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </ItemProvider>
  );
}

export default App;
