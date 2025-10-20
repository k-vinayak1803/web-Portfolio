import React from "react";

import htmlImg from "../images/html-5.png";
import cssImg from "../images/css-3.png";
import jsImg from "../images/js.png";
import bootstrapImg from "../images/bootstrap.png";
import reactImg from "../images/react.png";
import nextImg from "../images/nextjs.png";
import expressImg from "../images/express.png";
import tailwindImg from "../images/tailwind.png";
import githubImg from "../images/github.png";
import sqlImg from "../images/sql.png";
import djangoImg from "../images/django.svg";
import mongoDB from "../images/mongodb.png";

import "/src/Css/Skills.css";
import "/src/Css/media.css";

function Skills() {
  const skills = [
    { name: "HTML", imgSrc: htmlImg, color: "black" },
    { name: "CSS", imgSrc: cssImg, color: "black" },
    { name: "JavaScript", imgSrc: jsImg, color: "black" },
    { name: "React", imgSrc: reactImg, color: "black" },
    { name: "Next Js", imgSrc: nextImg, color: "black" },
    { name: "Node Js", imgSrc: expressImg, color: "black" },
    { name: "Express Js", imgSrc: reactImg, color: "black" },
    { name: "Bootstrap", imgSrc: bootstrapImg, color: "black" },
    { name: "Tailwind", imgSrc: tailwindImg, color: "black" },
    { name: "Git/GitHub", imgSrc: githubImg, color: "black" },
    { name: "SQL", imgSrc: sqlImg, color: "black" },
    { name: "MongoDB", imgSrc: mongoDB, color: "black" },
  ];

  return (
    <div className="skill-container">
      <h1
        className="py-5 ps-5 text-center section-title "
        style={{ fontSize: "4rem" }}
      >
        Skills
      </h1>

      <div style={{ width: "85rem", overflow: "hidden" }}>
        <div className="skill-box">
          {/* Generates two sets for infinite scrolling */}
          {[...Array(2)].map((_, idx) =>
            skills.map((s, i) => (
              <div
                key={`${idx}-${i}`}
                className="outer-cont box-color"
                style={{ background: s.color }}
              >
                <div className="inner-cont" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                  <img
                    src={s.imgSrc}
                    alt={s.name}
                    style={{ width: "5rem", height: "5rem" }}
                  />
                  <h3 style={{ margin: 0, textAlign: "center" }}>{s.name}</h3>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;
