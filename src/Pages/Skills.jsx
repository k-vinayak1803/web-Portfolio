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
    { name: "HTML", imgSrc: htmlImg, color: "black" },
    { name: "CSS", imgSrc: cssImg, color: "black" },
    { name: "JavaScript", imgSrc: jsImg, color: "black" },
    { name: "Bootstrap", imgSrc: bootstrapImg, color: "black" },
    { name: "React", imgSrc: reactImg, color: "black" },
    { name: "Tailwind", imgSrc: tailwindImg, color: "black" },
    { name: "Git/GitHub", imgSrc: githubImg, color: "black" },
    { name: "SQL", imgSrc: sqlImg, color: "black" },
    { name: "Django", imgSrc: djangoImg, color: "black" },
  ];

  return (
    <div
      className="container-fluid d-grid justify-content-center"
      style={{ width: "80%", minHeight: "45vh" }}
    >
      <h1 className="py-5 ps-5 text-center active-link" style={{ fontSize: "4rem" }}>
        Skills
      </h1>
      <div style={{ width: "85rem" }}>
        {/* Infinite Scrolling Row */}
        <div className="skill-wrapper">
          <div className="skill-box">

            {/* Generates two sets  */}
            {[...Array(2)].map((_, idx) =>
              skills.map((s, i) => (
                <div 
                key={`${idx}-${i}`}
                  className="outer-cont"
                  style={{ background: s.color }}
                >
                  <div className="inner-cont">
                    <img
                      src={s.imgSrc}
                      alt={s.name}
                      style={{ width: "5rem", height: "5rem" }}
                    />
                    <h3>{s.name}</h3>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
