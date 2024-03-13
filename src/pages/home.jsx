import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const backgroundPhotos = [
    "../../images/platter.png",
    "../../images/IMG_0103.jpeg",
    "../../images/IMG_2257.jpeg",
    "../../images/IMG_4293.jpeg"
  ];

  useEffect(() => {
    const preLoadImages = () => {
      return Promise.all(backgroundPhotos.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      }));
    };

    preLoadImages().then(() => {
      setIsLoaded(true);
    });

    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % backgroundPhotos.length);
    }, 4500);

    return () => {
      clearInterval(intervalId);
    };
  }, [backgroundPhotos]);

  return (
    <>
      <div id="window">
        {isLoaded && (
          <div className="parallax" style={{backgroundImage: `url('${backgroundPhotos[slideIndex]}')`}}></div>
        )}
        <img src="../images/drums-and-bale.png" alt="bale bale" width="100%" id="bale" />
      </div>
      <div id='home-header'>
        <img src="../images/parrot-left.png" alt="parrot" id='parrot'/>
        <div id='home-header-text'>
          <h1 id='home-text'>Taste the flavor of more than 5 cultures</h1>
          <p>Bringing you food from Mexico, Cuba, Honduras, Puerto Rico, Colombia, and more...</p>
        </div>
        <img src="../images/parrot.png" alt="parrot" id="parrot"/>
      </div>
      <section>
        <div className="card 1">
          <div id="card-1-text" width="50%">
          <p>Through years of mastering our craft and picking up some excellent dishes along the way, Bale Bale Rumba serves you food representing more than five cultures. We will be seasonally adding dishes from other latin countries so keep an eye on our socials.</p>
            <img src="../images/banner.png" alt="toucans" />
          </div>
          <img src="../images/flags.png" width="50%" className="picture card 1" />
        </div>

      </section>
    </>
  );
};

export default Home;
