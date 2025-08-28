import ProjectComp from "../Components/ProjectComp";
import "/src/Css/Experience.css";
import "/src/Css/media.css";

const projects = [
  {
    name: "SHOE-ERA",
    type: "E-Commerce Web Application",
    description: [
      "Built a responsive shoe store with product listings and cart features",
      "Used clean HTML and CSS for layout and  styling",
      "Focused on user-friendly navigation and mobile experience",
    ],
    github: "https://github.com/k-vinayak1803/Medstore-Project.git",
    vercel:
      "https://e-com-git-main-vinayak-kumawats-projects-b85ea45b.vercel.app",
  },
  {
    name: "Medstore",
    type: "E-Commerce Healthcare Platform",
    description: [
      "Developed a pharmacy site with product search and category filters",
      "Implemented login/registration and promotional banners",
      "Used Bootstrap for clean , accessible design",
    ],
    github: "https://github.com/k-vinayak1803/Medstore-Project.git",
    vercel:
      "https://e-com-git-main-vinayak-kumawats-projects-b85ea45b.vercel.app",
  },
  {
    name: "To-Do List",
    type: "Task Management Web App",
    description: [
      "Created a dynamic to-do list using HTML, CSS, and JavaScript",
      "Enabled real-time task updates with event-driven DOM changes",
      "Designed a clean interface with mobile compatibility",
    ],
    github: "https://github.com/k-vinayak1803/Medstore-Project.git",
    vercel:
      "https://e-com-git-main-vinayak-kumawats-projects-b85ea45b.vercel.app",
  },
];

function Projects() {
  return (
    <div className="project-container border">
      <h1
        className="py-5 ps-5 text-center active-link"
        style={{ fontSize: "4rem" }}
      >
        Projects
      </h1>
      <div className="row g-5 exp-content">
        {projects.map((project, index) => (
          <ProjectComp key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
