import './styles/Footer.css';
import iconWhite from '../../images/icono-blanco.svg';

function Footer() {
  return (
    <footer className="section-dark d-flex flex-column align-items-center justify-content-center">
      <img className="footer-logo" src={iconWhite} alt="Portfolio's logo" />
      <p className="footer-text text-center">
        I learn and create every day.<br />
        Let's create a project together.
      </p>
      <div className="icons-social-media d-flex flex-wrap align-items-center justify-content-center">
        <a href="https://github.com/farfandavid/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/david-dante-farfan/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="mailto: farfandavid34@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-envelope"></i>
        </a>
      </div>
      <div className="copyright">
        Designed and Developed <br /> by <br /> Farfan David Dante (2023) &#169;
      </div>
    </footer>
  );
}

export default Footer;