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
    <div className="intro-box box-color">
      <div className="heading-bar">
        <span className="dot"></span>
        <span className="dot bg-warning"></span>
        <span className="dot bg-dark"></span>
      </div>

      <div className="intro-code bg-dark p-4">
        <span className="keyword">const</span> coder{" "}
        <span className="operator">=</span> {"{"}
        <div className="details ps-5 py-2">
          <p>
            name: <span className="value yellow">{coder.name}</span>,
          </p>
          <p >
            skills: [
            <span className="value yellow" style={{display:'flex',flexWrap:'wrap'}}>{coder.skills.join(" , ")}</span>],
          </p>
          <p>
            role: <span className="value yellow">{coder.role}</span>,
          </p>
          <p>
            <span className="property">hardWorker</span>:{" "}
            <span className="value blue">{String(coder.hardWorker)}</span>,
          </p>
          <p>
            <span className="property">quickLearner</span>:{" "}
            <span className="value blue">{String(coder.quickLearner)}</span>,
          </p>
          <p>
            <span className="property">problemSolver</span>:{" "}
            <span className="value blue">{String(coder.problemSolver)}</span>
          </p>
          <p>{"};"}</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
