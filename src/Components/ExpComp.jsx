import '/src/Css/Box.css'
import '/src/Css/media.css'

function ExpComp({ index, exp }) {
  if (!exp) return null;

  return (
    <div className="box-content" key={index}>
      <div className="row justify-content-center ">
        <div
          className="row align-content-center heading"
          style={{ height: "4rem" }}
        >
          <span className="dot bg-danger"></span>
          <span className="dot bg-warning"></span>
          <span className="bg-dark dot"></span>
        </div>

        <div className=" p-4 bg-dark">
          <span style={{ color: "#ff5c8d" }}>const</span> {exp.title}{" "}
          <span style={{ color: "#ff5c8d" }}>=</span> <span>{"{"}</span>
          <div className="ps-5">
            <p>
              company: <span style={{ color: "#ffbd2e" }}>{exp.company}</span>,
            </p>
            <p>
              location: <span style={{ color: "#ffbd2e" }}>{exp.location}</span>
              ,
            </p>
            <p>
              duration: <span style={{ color: "#ffbd2e" }}>{exp.duration}</span>
              ,
            </p>
            <p>
              {" "}
              <span style={{ color: "#4ec9b0" }}>responsibilities</span>: [
            </p>
            <ul>
              {exp.responsibilities.map((task, i) => (
                <li key={i} style={{ listStyle: "none" }}>
                  {" "}
                  <span style={{ color: "#4fc3f7" }}>{task}</span>,
                </li>
              ))}
            </ul>
            <p>] {"};"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpComp;
