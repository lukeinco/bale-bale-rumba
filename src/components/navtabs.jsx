import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
<nav>
  <div id="left-nav">
  <img src="../images/balebalerumba.svg"/>

  </div>
  <div id="button">
    <Link to="/menu" className='btn' id="menu">Menu</Link>
    <Link to="/catering" className='btn' id="cater">Catering</Link>
    <Link to="/coffee" className='btn' id="coffee">Rojo Túcan Coffee</Link>
    <Link to="/reviews" className='btn' id='reviews'>Reviews</Link>
    <Link to="/about" className='btn' id="about">About Us</Link>
    <Link id="order" className='btn' >Order Now!</Link>
  </div>
</nav>
  );
}

export default NavTabs;
