import { NavHashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";
import "/src/Css/Navbar.css";
import "/src/Css/media.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");

  // Detect which section is visible
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% of section visible = active
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className=" d-flex px-5">
      <div className="d-flex link-list">
        <NavHashLink
          smooth
          to="/#home"
          onClick={() => setActiveLink("home")}
          className={activeLink === "home" ? "active-link nav-1" : "link"}
        >
          Home
        </NavHashLink>

        <NavHashLink
          smooth
          to="/#about"
          onClick={() => setActiveLink("about")}
          className={activeLink === "about" ? "active-link nav-2" : "link"}
        >
          About
        </NavHashLink>

        <NavHashLink
          smooth
          to="/#skills"
          onClick={() => setActiveLink("skills")}
          className={activeLink === "skills" ? "active-link nav-3" : "link"}
        >
          Skills
        </NavHashLink>

        <NavHashLink
          smooth
          to="/#experience"
          onClick={() => setActiveLink("experience")}
          className={activeLink === "experience" ? "active-link nav-4" : "link"}
        >
          Experience
        </NavHashLink>

        <NavHashLink
          smooth
          to="/#projects"
          onClick={() => setActiveLink("projects")}
          className={activeLink === "projects" ? "active-link nav-5" : "link"}
        >
          Projects
        </NavHashLink>
      </div>
    </nav>
  );
}

export default Navbar;
