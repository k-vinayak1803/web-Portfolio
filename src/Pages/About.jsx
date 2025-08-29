import { useEffect } from "react";
import "/src/Css/About.css";
import "/src/Css/media.css";

function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".slide-left, .slide-right");

    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const visibility = visibleHeight / rect.height;

        const scrollPercent = ((window.scrollY + windowHeight) / document.body.scrollHeight) * 100;

        if (visibility >= 0.4 && scrollPercent >= 20 && scrollPercent <= 80) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="about-container">
      <h1 className="section-title active-link">About</h1>

      <div className="about-row">
        <div className="about-image slide-left">
          <img
            src="https://1.bp.blogspot.com/-j-ERWuBRTuA/YTY_6WB8QZI/AAAAAAAADig/BGAaNkvSSrESO6039J0YxMC_IfgohWZIwCLcBGAsYHQ/s570/Shazim%2Buddin%2Bpp%2Bimage%2Bwith%2Bstroke.jpg"
            alt="Profile"
            className="profile-img"
          />
        </div>

        <div className="about-text slide-right">
          <p>
            I am a <span className="highlight pink">beginner web developer</span> with a strong
            interest in building responsive and user-friendly websites. Skilled in{" "}
            <span className="highlight yellow">HTML, CSS, JavaScript, and React</span>, I enjoy
            turning ideas into interactive designs and continuously improving my coding skills.
            I am also learning <span className="highlight blue">Node.js, Express, and databases</span>{" "}
            to become a full-stack developer. Passionate about problem-solving and modern web
            design, I aim to contribute to{" "}
            <span className="highlight purple">real-world projects</span> while expanding my
            knowledge of <span className="highlight red">frontend and backend development</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
