import React from "react";

import htmlImg from "../images/html-5.png";
import cssImg from "../images/css-3.png";
import jsImg from "../images/js.png";
import bootstrapImg from "../images/bootstrap.png";
import reactImg from "../images/react.png";
import tailwindImg from "../images/tailwind.png";
import githubImg from "../images/github.png";
import sqlImg from "../images/sql.png";
import djangoImg from "../images/django.svg";

import "/src/Css/Skills.css";
import "/src/Css/media.css";

function Skills() {
  const skills = [
    { name: "HTML", imgSrc: htmlImg },
    { name: "CSS", imgSrc: cssImg },
    { name: "JavaScript", imgSrc: jsImg },
    { name: "Bootstrap", imgSrc: bootstrapImg },
    { name: "React", imgSrc: reactImg },
    { name: "Tailwind", imgSrc: tailwindImg },
    { name: "Git/GitHub", imgSrc: githubImg },
    { name: "SQL", imgSrc: sqlImg },
    { name: "Django", imgSrc: djangoImg },
  ];

  return (
    <section className="skill-container">
      <h1 className="section-title active-link">Skills</h1>

      <div className="skill-box">
        {/* Duplicate list for infinite scroll */}
        {[...Array(2)].map((_, idx) =>
          skills.map((s, i) => (
            <div key={`${idx}-${i}`} className="outer-cont">
              <div className="inner-cont">
                <img src={s.imgSrc} alt={s.name} />
                <h3>{s.name}</h3>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Skills;
