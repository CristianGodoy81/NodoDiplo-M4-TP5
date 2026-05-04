import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="container mx-auto px-4 max-w-6xl h-16 flex justify-between items-center">
        {/* Logo / Título */}
        <Link to="/" className="text-white text-2xl font-bold tracking-wider">
          Países del Mundial 2026
        </Link>
        
        {/* Enlaces */}
        <div className="flex gap-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "text-white font-semibold border-b-2 border-white pb-1" : "text-blue-200 hover:text-white transition-colors"
            }
          >
            Inicio
          </NavLink>
          <NavLink 
            to="/items" 
            className={({ isActive }) => 
              isActive ? "text-white font-semibold border-b-2 border-white pb-1" : "text-blue-200 hover:text-white transition-colors"
            }
          >
            Ver Países
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
