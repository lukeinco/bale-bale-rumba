import { Link, useLocation } from 'react-router-dom';

// let backgroundPhotos = ["../../images/platter.png","../../images/IMG_0103.jpeg","../../images/IMG_2257.jpeg","../../images/IMG_4293.jpeg"];
// let slideIndex = 0;
// document.addEventListener("DOMContentLoaded", function() {
// const parallax = document.getElementsByClassName("parallax");
// // const parallax = document.querySelector(".parallax");
// function slide () {
//   slideIndex++;
//   console.log(backgroundPhotos[slideIndex - 1]);
//   parallax.style.backgroundImage = `url('${backgroundPhotos[slideIndex - 1]}')`;
//   setTimeout(slide, 4500);
// }
// slide();});

function Home() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <div id="window">
        <div className="parallax"></div>
        <img src="../images/drums-and-bale.png" alt="bale bale" width="100%" id="bale" />

      </div>
      <section>
        <div className="card 1">
          <div id="card-1-text" width="50%">
            <h1>Enjoy the Flavors of 5 Cultures!</h1>
            <img src="../images/toucan-leaves.png" alt="toucans" />
          </div>
          <img src="../images/platter.png" width="50%" className="picture card 1" />
        </div>
        <div className="card 2">
          <img src="../images/catering.png" width="50%" alt="catering" />
          <div id="card-1-text" >
            <h1>Cater with us</h1>
            <img src="../images/drum-leaves.png" alt="drum and leaves" />
          </div>
        </div>
        <div className="card 3">
          <div id="card-1-text" width="50%">
            <h1>Coffee from Honduras</h1>
          </div>
            <img src="../images/coffee-tree.jpg" alt="coffee berries" width="50%"/>
         
        </div>
        <div className="card ">
          <img src="../images/family.jpg" alt="our family" width="50%"/>
          <div id="card-1-text" width="50%">
            <h1>Our family</h1>
          </div>
         
        </div>
      </section>
    </>
  );
}

export default Home;