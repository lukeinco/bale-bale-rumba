import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
<nav>
  <div id="left-nav">
    <Link to="/" >
  <img src="../images/drums-and-bales.png"/>
      </Link>/

  </div>
  <div id="button">
    <Link to="/menu" className='btn' id="menu">Menu</Link>
    <Link to="/catering" className='btn' id="cater">Special Events</Link>
    <Link to="/coffee" className='btn' id="coffee">Rojo Túcan Coffee</Link>
    <Link to="/reviews" className='btn' id='reviews'>Reviews</Link>
    <Link to="/about" className='btn' id="about">About Us</Link>
    <a className='btn' id='order' href="https://food.google.com/chooseprovider?restaurantId=/g/11jnqwwttd&g2lbs=AIQllVzkeWcLQ4qHEGT9oeuSG-pnsrT7saJR86fBoITeHTF7zweLhPqVXzRCkbCrnO6I0SXRZKaHq5-ua-H62MH27lFgs-vztUw5H4LLDWqaAi-Eyn7jmnVFj4MrTz6sD2pb8Nigjdt8lZUZZfyOuc1SXgu8sTXpZDg2xihDfNxRb97q4ug7fFQUJLZFj7VzO-VVD3yfH8d2&hl=en-US&gl=us&cs=1&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=SBinZa-xNvLh0PEPlceo-Ak&ei=SBinZa-xNvLh0PEPlceo-Ak&fo_s=OA&opi=89978449&sei=CZUtuRKlUaymES3x6K9g6ud4&utm_campaign&utm_source=search">Order Now!</a>
  </div>
</nav>
  );
}

export default NavTabs;
