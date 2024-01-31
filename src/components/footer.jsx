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
    <a href="https://www.google.com/maps/place/Rumba+-+Latin+Cuisine/@38.9017157,-104.7665286,15z/data=!4m6!3m5!1s0x87134f426b7636d5:0xb362bc23852ed8b6!8m2!3d38.9017157!4d-104.7665286!16s%2Fg%2F11jnqwwttd?entry=ttu">
    <address>4737 N Academy Blvd, Colorado Springs, CO 80918</address>

    </a>
  </ul>
  <ul>
    <h3>Connect with us!</h3>
    <a href="https://www.facebook.com/rumbaCOS/">
    <img src="../images/logos/fb.png" width="20%" alt="facebook"/>
    </a>
    <a href="https://www.instagram.com/balebale_rumba/">
    <img src="../images/logos/insta.png" width="18%" alt="instagram"/>
    </a>
    <a href="https://www.tiktok.com/@balebale_rumba">
    <img src="../images/logos/tiktok.png" width="20%" alt="tiktok"/>
    </a>
  </ul>
</footer>
  );
}

export default Footer;