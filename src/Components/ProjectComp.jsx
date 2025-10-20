import "/src/Css/Box.css";
import "/src/Css/media.css";

function ProjectComp({ index, project }) {
  if (!project) return null;

  const styleKeyword = { color: "#ff5c8d" };
  const styleType = { color: "#ffbd2e" };
  const styleDescription = { color: "#4ec9b0" };
  const styleLine = { color: "#4fc3f7" };

  return (
    <div className="box-content box-color" key={index}>
      <div className="row justify-content-center">
        <div className="row align-content-center heading">
          <span className="dot bg-danger"></span>
          <span className="dot bg-warning"></span>
          <span className="dot bg-dark"></span>
        </div>

        <div className="py-4 bg-dark">
          <span style={styleKeyword}>const</span> {project.name}{" "}
          <span style={styleKeyword}>=</span> <span>{"{"}</span>

          <div className="ps-5">
            <p>
              type: <span style={styleType}>{project.type}</span>,
            </p>

            <p style={styleDescription}>description: [</p>
            <ul className="project-list">
              {project.description.map((line, i) => (
                <li key={i} style={styleLine}>
                  {line},
                </li>
              ))}
            </ul>
            <p>] {"};"}</p>

            <div className="box-btn d-flex gap-2 mt-3">
              <a
                className="btn btn-warning"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
              <a
                className="btn btn-warning"
                href={project.vercel}
                target="_blank"
                rel="noreferrer"
              >
                Live Preview
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectComp;
