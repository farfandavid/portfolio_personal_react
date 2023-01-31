import './styles/Hero.css'
import heroPic from '../../images/desarrollador5.svg';

function Hero() {
  return (
    <main className='hero-container'>
      <div className='hero-info'>
        <h2 className='rainbow-bg'>Welcome! I'm</h2>
        <h1>Farfan David Dante</h1>
        <p className='MyTitle'>Software Developer</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate tenetur a rerum quibusdam laborum, aut autem vitae aliquam.</p>
        <p className='hero-social-media'>Check Out My
          <a href='https://github.com/farfandavid' target='_blank' rel='noopener noreferrer'>
            <i className='bi bi-github'></i>
          </a>
          <a href='https://www.linkedin.com/in/david-dante-farfan/' target='_blank' rel='noopener noreferrer' >
            <i className='bi bi-linkedin'></i>
          </a>
          <a href='href="mailto: farfandavid34@gmail.com"'>
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