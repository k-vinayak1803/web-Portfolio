import "/src/Css/Box.css";
import "/src/Css/media.css";

function ProjectComp({ index, project }) {
  if (!project) return null;

  return (
    <div className="box-content" key={index}>
      <div className="row justify-content-center">
        
        <div className="row align-content-center heading" style={{ height: "4rem" }}>
          <span className="dot bg-danger"></span>
          <span className="dot bg-warning"></span>
          <span className="dot bg-dark"></span>
        </div>

        <div className="p-4 bg-dark">
          <span style={{ color: "#ff5c8d" }}>const</span> {project.name}{" "}
          <span style={{ color: "#ff5c8d" }}>=</span> <span>{"{"}</span>
          
          <div className="ps-5">
            <p>type: <span style={{ color: "#ffbd2e" }}>{project.type}</span>,</p>
            
            <p><span style={{ color: "#4ec9b0" }}>description</span>: [</p>
            <ul className="project-list">
              {project.description.map((line, i) => (
                <li key={i}>
                  <span style={{ color: "#4fc3f7" }}>{line}</span>,
                </li>
              ))}
            </ul>
            <p>] {"};"}</p>

            <div className="box-btn d-flex gap-3 mt-3">
              <a className="btn btn-warning" href={project.github} target="_blank" rel="noreferrer">
                Github
              </a>
              <a className="btn btn-warning" href={project.vercel} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectComp;
