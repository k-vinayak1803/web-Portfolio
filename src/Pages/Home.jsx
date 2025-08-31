import "/src/Css/Home.css";
import "/src/Css/media.css";
import Intro from "../Components/Intro";
import TypewriterComp from "../Components/TypewriterComp";

function Home() {
  return (
    <div className="home-comp ">
      <div className="row home-page">
        {/* Right Side Content */}
        <div className="col-lg-7 col-md-12 header-text">
          <div className="typewriter home-text-color text-color">
            <h1 className="typewriter-text">
              <span className="text ">Vinayak Kumawat</span>
              <span className="cursor"></span>
            </h1>
          </div>

          <div className="type-text">
            <div>
              <TypewriterComp />
            </div>
          </div>
        </div>

        {/* Left Side Image */}
        <div className="col-lg-5 col-md-12 d-flex intro-outer slide-right">
          <Intro />
        </div>
      </div>
    </div>
  );
}

export default Home;
