export default function Catering() {
  const styleObject = {
    border: 'none',
    overflow: 'hidden'
  };

  return (
    <>
      <h1 id="events-header">EVENTS</h1>
      <div className="card two">
        <iframe
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FrumbaCOS%2Fvideos%2F1592334758172944&width=576&show_text=true&height=1087&appId"
          width="323"
          height="610"
          style={styleObject}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
        <div id="card-2-text" width="25%">
          <h1>Rent out the restaurant for the night!</h1>
          <p>Need space for your big event? We got you covered.</p>
          <img src="../images/drum-leaves.png" alt="" />
        </div>
        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FrumbaCOS%2Fvideos%2F1731541650681218&width=321&show_text=true&height=634&appId" width="321" height="634" style={styleObject} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
        <div id="card-2-text" width="25%">
          <h1>Live Music</h1>
          <p>Join us for live music and parties for the holdiays! Check our socials to stay up to date on the next event.</p>
          <img src="../images/toucan-leaves.png" width="50%" alt="" />
        </div>
      </div>
      <div className="card two">
        <div id="card-1-text" width="50%">
          <h1>We'll bring the Rumba to you!</h1>
          <p>Don't feel like doing the dishes and stressing about food? We'll bring the food truck out to you! Email or call us at <a href="mailto:perez6118@yahoo.com">perez6118@yahoo.com</a> or <a href="tel:+7192035609">(719)203-5609</a> for options and rates.</p>
          <img src="../images/toucan-leaves.png" alt="toucans" />
        </div>
        <img src="../images/fam-van.jpg" width="50%" className="picture card 1" />
      </div>
      <div className="card two">
        <img src="../images/catering.png" width="50%" className="picture card 1" />
        <div id="card-1-text" width="50%">
          <h1>Cater with us for your next event!</h1>
          <p>Whether it's a quincenera, wedding, office party or retirement party we want to be there! Just email us at <a href="mailto:perez6118@yahoo.com">perez6118@yahoo.com</a> or call <a href="tel:+7192035609">(719)203-5609</a> for options and rates.</p>
          <img src="../images/toucan-leaves.png" alt="toucans" />
        </div>
      </div>
    </>
  );
}