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
      <div id='home-header'>
        <img src="../images/parrot-left.png" alt="parrot" />
        <div id='home-header-text'>
          <h1 id='home-text'>Taste the flavor of 5 cultures</h1>
          <p>Bringing you food from Mexico, Cuba, Honduras, Puerto Rico, and Colombia</p>
        </div>
        <img src="../images/parrot.png" alt="parrot" />
      </div>
      <section>
        <div className="card 1">
          <div id="card-1-text" width="50%">
          <img src="../images/banner.png" alt="toucans" />
            <h1>Mexico</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius iste facilis accusantium odio consequuntur quasi illum ipsam minima officiis quisquam non quo id, corporis recusandae! Dicta repellat dolo</p>
            <h3>Try our:</h3>
            <p>Quesadillas</p>
            <img src="../images/banner.png" alt="toucans" />
          </div>
          <img src="../images/mexico-wares.jpg" width="50%" className="picture card 1" />
        </div>
        <div className="card 2">
          <img src="../images/cuba.jpg" width="50%" alt="catering" />
          <div id="card-1-text" >
          <img src="../images/banner.png" alt="toucans" />
            <h1>Cuba</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit porro perferendis illum cumque, nobis pariatur? Ullam maxime porro accusamus iure magnam, nam quia quis at praesentium eius </p>
            <h3>Try our:</h3>
            <p>Yuca Frita, Mojo</p>
            <img src="../images/banner.png" alt="toucans" />
          </div>
        </div>
        <div className="card 3">
          <div id="card-1-text" width="50%">
            <h1>Honduras</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nulla hic expedita dignissimos similique, laborum commodi tempore molestiae nobis tempora! Eveniet quas, accusamus quod mollitia </p>
            <h3>Try our:</h3>
            <p>Baleada</p>
            <img src="../images/banner.png" alt="toucans" />
          </div>
          <img src="../images/honduras-beach.jpeg" alt="coffee berries" width="50%" />

        </div>
        <div className="card ">
          <img src="../images/puerto-rico.jpg" alt="our family" width="50%" />
          <div id="card-1-text" width="50%">
            <img src="../images/banner.png" alt="toucans" />
            <h1>Puerto Rico</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quos, repellendus, facere, eius nemo nulla libero veniam culpa qui molestiae temporibus? Sit provident vero obcaecati facere </p>
            <h3>Try our:</h3>
            <p>Mofongo</p>
            <img src="../images/toucan-leaves.png" alt="" />
          </div>
        </div>
          <div className="card">
            <div id="card-1-text" width="50%">
              <h1>Colombia</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nulla hic expedita dignissimos similique, laborum commodi tempore molestiae nobis tempora! Eveniet quas, accusamus quod mollitia optio dolores nobis </p>
              <h3>Try our:</h3>
              <p>Bandeja Paisa</p>
              <img src="../images/banner.png" alt="toucans" />
            </div>
            <img src="../images/colombia.jpg" alt="colombia" width="50%" />

          </div>
      </section>
    </>
  );
}

export default Home;