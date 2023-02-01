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
        <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
      </div>
      <div className="copyright">
        Designed and Developed <br /> by <br /> Farfan David Dante (2023) &#169;
      </div>
    </footer>
  );
}

export default Footer;