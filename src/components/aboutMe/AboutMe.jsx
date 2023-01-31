import './styles/AboutMe.css'

function AboutMe() {
  return (
    <section id="about-me" className="about-me section-dark">
      <div className="about-me-container">
        <h2 className="section-title rainbow-bg">About Me</h2>
        <div className='about-me-info'>
          <p>
            Hello! My name is David and I enjoy creating things that live on the internet. My interest in web development started back in 2017 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML &amp; CSS!
          </p>
          <p>
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Eleventy</li>
            <li>Node.js</li>
            <li>WordPress</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default AboutMe;