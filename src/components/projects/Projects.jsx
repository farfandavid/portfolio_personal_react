import './styles/Projects.css';
import { useEffect, useState } from 'react';
import ProjectCard from './components/ProjectCard';

function ProjectsData() {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    fetch("json/projects.json")
      .then(response => response.json())
      .then(datos => {
        setProjectsData(datos)
      })
  }, []);
  return projectsData;
}


function Projects() {

  const projectsData = ProjectsData();

  return (
    <section id="project" className="project-recent section-light d-flex flex-column">
      <h2 className="section-title rainbow-bg">My Recent Projects</h2>
      <h3 className="section-description">These are some projects that I have created recently</h3>
      {/* <!-- Project Gallery --> */}
      <div className="container text-center project-container">
        <div className="row">
          {/* <!-- Proyecto1 --> */}
          {
            projectsData.map(item => (
              <ProjectCard image={item.image} name={item.name} linkDeploy={item.linkDeploy} linkGitHub={item.linkGitHub} key={item.id} ></ProjectCard>
            ))
          }
        </div>
      </div>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <button type="button" className="btn btn-info">
          View More
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </a>

    </section>
  );
}

export default Projects;