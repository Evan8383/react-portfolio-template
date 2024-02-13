import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <main className='flex'>
        <Nav />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App
