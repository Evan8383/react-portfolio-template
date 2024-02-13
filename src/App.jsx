import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <main className='sm:flex'>
        <Nav />
        <Outlet className='mb-auto'/>
      </main>
      <Footer />
    </>
  );
};

export default App
