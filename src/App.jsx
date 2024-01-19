import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/footer'
import './style.css';

function App() {

  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    <Footer/>
    </>
  );
}

export default App
