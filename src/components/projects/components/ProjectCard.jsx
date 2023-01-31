function ProjectCard({ name, linkGitHub, linkDeploy, image }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="project">
        <img src={image} alt="Project 1" />
        <div className="overlay">
          <p>{name}</p>
          <div className="icons-container">
            <a href={linkGitHub} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href={linkDeploy} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-laptop"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;