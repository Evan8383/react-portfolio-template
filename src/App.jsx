import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <main className='sm:flex'>
        <Nav />
        <div className='max-sm:h-screen'>
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default App
