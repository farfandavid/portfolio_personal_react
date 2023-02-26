import './styles/Hero.css'
import heroPic from '../../images/desarrollador5.svg';

function Hero() {
  return (
    <main className='hero-container'>
      <div className='hero-info'>
        <h2 className='rainbow-bg'>Welcome! I'm</h2>
        <h1>Farfan David Dante</h1>
        <p className='MyTitle'>Full Stack Web Developer</p>
        <p>Hi there! I'm a full stack web developer and programmer analyst with experience in creating custom web applications. I'm passionate about designing and developing innovative and scalable solutions that meet end users' needs. Additionally, I'm always seeking out new challenges to continue learning and growing in my career as a developer.</p>
        <p className='hero-social-media'>Check Out My
          <a href='https://github.com/farfandavid' target='_blank' rel='noopener noreferrer'>
            <i className='bi bi-github'></i>
          </a>
          <a href='https://www.linkedin.com/in/david-dante-farfan/' target='_blank' rel='noopener noreferrer' >
            <i className='bi bi-linkedin'></i>
          </a>
          <a href='mailto: farfandavid34@gmail.com' target='_blank' rel='noopener noreferrer' >
            <i className='bi bi-envelope'></i>
          </a>
        </p>
      </div>
      <div className='hero-pic'>
        <img className='hero-image-developer' src={heroPic} alt='profile pic'></img>
      </div>
    </main>
  );
}

export default Hero;