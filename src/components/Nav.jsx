import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className={`text-white ${location.pathname === '/' ? 'font-bold' : ''}`}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={`text-white ${location.pathname === '/about' ? 'font-bold' : ''}`}>About</Link>
        </li>
        <li>
          <Link to="/portfolio" className={`text-white ${location.pathname === '/portfolio' ? 'font-bold' : ''}`}>Portfolio</Link>
        </li>
        <li>
          <Link to="/contact" className={`text-white ${location.pathname === '/contact' ? 'font-bold' : ''}`}>Contact</Link>
        </li>
        <li>
          <Link to="/resume" className={`text-white ${location.pathname === '/resume' ? 'font-bold' : ''}`}>Resume</Link>
        </li>
      </ul>
    </nav>

  );
}

export default Nav;