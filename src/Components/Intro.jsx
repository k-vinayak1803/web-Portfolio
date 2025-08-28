import "/src/Css/Home.css";
import "/src/Css/media.css";

function Intro() {
  const coder = {
    name: "Vinayak Kumawat",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "MySQL", "Python"],
    experience: "2 years",
    hardWorker: "true",
    quickLearner: "true",
    problemSolver: "true",
  };

  return (
      <div className="intro-box " >
        <div
          className="align-content-center heading"
          style={{ height: "4rem" }}>
          <span className="dot bg-danger"></span>
          <span className=" dot bg-warning"></span>
          <span className="bg-dark dot"></span>
        </div>

        <div className="p-4 bg-dark" >
          <span style={{ color: "#ff5c8d" }}>const</span> coder{" "}
          <span style={{ color: "#ff5c8d" }}>=</span> <span>{"{"}</span>
          <div className="details ps-5 py-2">
            <p>
              name : <span style={{ color: "#ffbd2e" }}>{coder.name} </span>,
            </p>
            <p >
              skills: [{" "}
              <span style={{ color: "#ffbd2e"}} >
                {coder.skills.join(", ")}
              </span>
              ],
            </p>
            <p>
              role : <span style={{ color: "#ffbd2e" }}>{coder.role}</span> ,
            </p>
            <p>
              {" "}
              <span style={{ color: "#4fc3f7" }}>hardWorker</span> :{" "}
              <span style={{ color: "#4ec9b0" }}>{coder.hardWorker}</span> ,
            </p>
            <p>
              {" "}
              <span style={{ color: "#4fc3f7" }}>quickLearner</span> :{" "}
              <span style={{ color: "#4ec9b0" }}>{coder.quickLearner} </span>,
            </p>
            <p>
              {" "}
              <span style={{ color: "#4fc3f7" }}>problemSolver </span>:{" "}
              <span style={{ color: "#4ec9b0" }}>{coder.problemSolver}</span>{" "}
            </p>
            <p>{"};"}</p>
          </div>
        </div>
      </div>
  );
}
export default Intro;
