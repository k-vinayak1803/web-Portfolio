import ExpComp from "../Components/ExpComp";

import "/src/Css/Navbar.css";
import "/src/Css/Box.css";
import "/src/Css/media.css";

const experience = [
   {
    title: "Pharmacist",
    company: "Swaraj Chemist",
    location: "Vasai",
    duration: "Nov 2023 - May 2025",
    responsibilities: [
      "Managed digital inventory; reduced stock errors",
      "Implemented e-prescription system for efficiency",
      "Ensured compliance via accurate documentation",
      "Handled software issues and vendor coordination"
    ]
  },
  {
  title: "Trainee Pharmacist",
  company: "Noble Plus Pharmacy",
  location: "Mumbai",
  duration: "Aug 2021 – Oct 2023",
  responsibilities: [
    "Used pharmacy software for records and reports",
    "Digitized patient health data for smoother access",
    "Trained in privacy and healthcare tech tools",
    "Assisted in daily operations of inventory checks/"
  ]
}
 ];

function Experience() {
  return (
    <div className="box-container">
      <h1
        className="py-5 ps-5 text-center active-link" style={{fontSize:'4rem'}}>
        Experience
      </h1>
      <div className="box-outerCont">
        {experience.map((exp, index) => (
          <ExpComp key={index} index={index} exp={exp} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
