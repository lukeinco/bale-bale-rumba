import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const currentPage = useLocation().pathname;

  return (
<footer width="100%">
  <ul>
    <h3>Hours:</h3>
    <p>Monday: Closed</p>
    <p>Tuesday - Saturday: 11 - 8</p>
    <p>Sunday: 11 - 7</p>
  </ul>
  <ul>
    <h3>Address:</h3>
    <address>4737 N Academy Blvd, Colorado Springs, CO 80918</address>
  </ul>
  <ul>
    <h3>Connect with us!</h3>
    <img src="../images/logos/fb.png" width="20%" alt="facebook"/>
    <img src="../images/logos/insta.png" width="18%" alt="instagram"/>
    <img src="../images/logos/tiktok.png" width="20%" alt="tiktok"/>
  </ul>
</footer>
  );
}

export default Footer;