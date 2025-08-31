import "/src/Css/Box.css";
import "/src/Css/media.css";

function ExpComp({ index, exp }) {
  if (!exp) return null;

  return (
    <div className="box-content box-color" key={index}>
      <div className="row justify-content-center">
        
        {/* Top dots */}
        <div className="row align-content-center heading">
          <span className="dot bg-danger"></span>
          <span className="dot bg-warning"></span>
          <span className="dot bg-dark"></span>
        </div>

        {/* Code-like box */}
        <div className="py-4 bg-dark code-block">
          <span className="kwd">const</span> {exp.title}{" "}
          <span className="kwd">=</span> {"{"}
          <div className="ps-5">
            <p>
              company: <span className="val">{exp.company}</span>,
            </p>
            <p>
              location: <span className="val">{exp.location}</span>,
            </p>
            <p>
              duration: <span className="val">{exp.duration}</span>,
            </p>

            <p>
              <span className="prop">responsibilities</span>: [
            </p>
            <ul className="resp-list">
              {exp.responsibilities.map((task, i) => (
                <li key={i}>
                  <span className="string">"{task}"</span>,
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
