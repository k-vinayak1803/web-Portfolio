import "/src/Css/Project.css";
import "/src/Css/Experience.css";
import "/src/Css/media.css";

function ProjectComp({ index, project }) {
  if (!project) return null;

  return (
    <div className="col-12 col-md-6 mb-4 exp-content" key={index}>
      <div className="project-card bg-dark">
        {/* Header dots */}
        <div className="heading align-items-center" style={{ height: "4rem" }}>
          <span className="dot bg-danger"></span>
          <span className="dot bg-warning"></span>
          <span className="dot bg-dark"></span>
        </div>

        {/* Project details */}
        <div className="details px-4 py-3">
          <span style={{ color: "#ff5c8d" }}>const</span> {project.name}{" "}
          <span style={{ color: "#ff5c8d" }}>=</span> <span>{"{"}</span>

          <div className="ps-4">
            <p>
              type: <span style={{ color: "#ffbd2e" }}>{project.type}</span>,
            </p>

            <p>
              <span style={{ color: "#4ec9b0" }}>description</span>: [
            </p>

            <ul className="project-list">
              {project.description.map((line, i) => (
                <li key={i}>
                  <span style={{ color: "#4fc3f7" }}>{line}</span>,
                </li>
              ))}
            </ul>

            <p>] {"};"}</p>

            <div className="project-btn d-flex gap-3 mt-3">
              <a className="btn btn-warning" target="_blank" href={project.github}>
                Github
              </a>
              <a className="btn btn-warning" target="_blank" href={project.vercel}>
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
