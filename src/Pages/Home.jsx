import "/src/Css/Home.css";
import "/src/Css/media.css";
import TypewriterComp from "../Components/TypewriterComp";
import Intro from "../Components/Intro";

function Home() {
  return (
    <div className="container-fluid home-comp">
      <div className="row home-page">
        {/* Right Side Content */}
        <div className="col-lg-7 col-md-12 header-text">
          <div className="typewriter">
            <h1 className="typewriter-text">
              <span className="text">Vinayak Kumawat</span>
              <span className="cursor"></span>
            </h1>
          </div>
          <TypewriterComp />
        </div>

        {/* Left Side Intro */}
        <div className="col-lg-5 col-md-12 d-flex intro-outer">
          <Intro />
        </div>
      </div>
    </div>
  );
}

export default Home;
