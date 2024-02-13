import { useState } from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="h-fit sm:h-screen sm:flex sm:flex-col justify-between ">
        <nav className="bg-gray-800 p-4 sm:max-w-fit flex-grow sm:rounded-r">
          <h1 className="text-2xl text-white font-extrabold mb-8">Evan Bennett</h1>
          <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden block text-white">
            <i className="fa fa-bars"></i>
          </button>
          <ul className={`flex flex-col space-y-4 ${isOpen ? 'block' : 'hidden'} sm:block`}>
            <li>
              <Link to="/" className={`text-white ${location.pathname === '/' ? 'font-bold' : ''} hover:text-blue-400 transition duration-300`}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={`text-white ${location.pathname === '/about' ? 'font-bold' : ''} hover:text-blue-400 transition duration-300`}>About</Link>
            </li>
            <li>
              <Link to="/portfolio" className={`text-white ${location.pathname === '/portfolio' ? 'font-bold' : ''} hover:text-blue-400 transition duration-300`}>Portfolio</Link>
            </li>
            <li>
              <Link to="/contact" className={`text-white ${location.pathname === '/contact' ? 'font-bold' : ''} hover:text-blue-400 transition duration-300`}>Contact</Link>
            </li>
            <li>
              <Link to="/resume" className={`text-white ${location.pathname === '/resume' ? 'font-bold' : ''} hover:text-blue-400 transition duration-300`}>Resume</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Nav;