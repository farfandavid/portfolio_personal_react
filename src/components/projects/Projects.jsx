import './styles/Projects.css'

function Projects() {
  return (
    <section id="project" class="project-recent section-light d-flex flex-column">
      <h2 class="section-title rainbow-bg">My Recent Projects</h2>
      <h3 class="section-description">These are some projects that I have created recently</h3>
      {/* <!-- Project Gallery --> */}
      <div class="container text-center project-container">
        <div class="row">
          {/* <!-- Proyecto1 --> */}
          <div class="col-12 col-md-6 col-lg-4">
            <div class="project">
              <img src="./image/proyecto1.png" alt="Project 1" />
              <div class="overlay">
                <p>Proyecto 1</p>
                <div class="icons-container">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-github"></i>
                  </a>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Proyecto2 --> */}
          <div class="col-12 col-md-6 col-lg-4">
            <div class="project">
              <img src="./image/proyecto2.png" alt="Project 2" />
              <div class="overlay">
                <p>Proyecto 2</p>
                <div class="icons-container">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-github"></i>
                  </a>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Proyecto3 --> */}
          <div class="col-12 col-md-6 col-lg-4">
            <div class="project">
              <img src="./image/proyecto3.png" alt="Project 3" />
              <div class="overlay">
                <p>Proyecto 3</p>
                <div class="icons-container">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-github"></i>
                  </a>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <button type="button" class="btn btn-info">
          View More
          <i class="bi bi-arrow-right-circle-fill"></i>
        </button>
      </a>

    </section>
  );
}

export default Projects;