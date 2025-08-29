import { NavHashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";
import "/src/Css/Navbar.css";
import "/src/Css/media.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");

  // Detect visible section
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
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Define navbar links
  const links = [
    { id: "home", label: "Home", className: "nav-1" },
    { id: "about", label: "About", className: "nav-2" },
    { id: "skills", label: "Skills", className: "nav-3" },
    { id: "experience", label: "Experience", className: "nav-4" },
    { id: "projects", label: "Projects", className: "nav-5" },
  ];

  return (
    <nav className="d-flex px-5">
      <div className="d-flex link-list">
        {links.map((link) => (
          <NavHashLink
            key={link.id}
            smooth
            to={`/#${link.id}`}
            onClick={() => setActiveLink(link.id)}
            className={
              activeLink === link.id ? `active-link ${link.className}` : "link"
            }
          >
            {link.label}
          </NavHashLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;



