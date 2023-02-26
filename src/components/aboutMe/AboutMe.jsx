import './styles/AboutMe.css'

function AboutMe() {
  return (
    <section id="about-me" className="about-me section-dark">
      <div className="about-me-container">
        <h2 className="section-title rainbow-bg">About Me</h2>
        <div className='about-me-info'>
          <p>
            Hi there! I'm a full stack web developer with experience in MERN, FastAPI, and Python technologies. I'm passionate about creating innovative and scalable solutions to meet the needs of end-users. I've worked on projects ranging from custom web applications for my friends to websites like an image gallery, and I'm always looking for new challenges to continue improving my skills and knowledge.
          </p>
          <p>
            Here are all the technologies I know and am currently learning:
          </p>
          {/* <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Eleventy</li>
            <li>Node.js</li>
            <li>WordPress</li>
          </ul> */}
          <div className='aboutme-tech'>
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
              <i class="devicon-mongodb-plain"></i>
              <h3>MongoDB</h3>
            </a>
            <a href="https://expressjs.com" target="_blank" rel="noreferrer">
              <i class="devicon-express-original"></i>
              <h3>Express</h3>
            </a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <i class="devicon-react-original"></i>
              <h3>React</h3>
            </a>
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              <i class="devicon-nodejs-plain"></i>
              <h3>NodeJS</h3>
            </a>
            <a href="https://www.python.org" target="_blank" rel="noreferrer">
              <i className='devicon-python-plain'></i>
              <h3>Python</h3>
            </a>
            <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noreferrer">
              <i class="devicon-fastapi-plain"></i>
              <h3>FastAPI</h3>
            </a>
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
              <i class="devicon-html5-plain"></i>
              <h3>HTML5</h3>
            </a>
            <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
              <i class="devicon-css3-plain"></i>
              <h3>CSS</h3>
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
              <i class="devicon-javascript-plain"></i>
              <h3>JavaScript</h3>
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
              <i class="devicon-typescript-plain"></i>
              <h3>TypeScript</h3>
            </a>
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              <i class="devicon-nextjs-plain"></i>
              <h3>NextJS</h3>
            </a>
            <a href="https://redux.js.org" target="_blank" rel="noreferrer">
              <i class="devicon-redux-original"></i>
              <h3>Redux</h3>
            </a>
            <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
              <i class="devicon-bootstrap-plain"></i>
              <h3>Bootstrap5</h3>
            </a>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <i class="devicon-git-plain"></i>
              <h3>GIT</h3>
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <i class="devicon-github-plain"></i>
              <h3>GitHub</h3>
            </a>


          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutMe;