/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles/NavBar.css'
import iconWhite from '../../images/icono-blanco.svg';

function NavBar() {

  /* const goToSection = (id) => {
    var section = document.getElementById(id);
    var sectionTop = section.offsetTop;
    var windowHeight = window.innerHeight;

    window.scrollTo({
      top: sectionTop - (windowHeight / 3),
      behavior: 'smooth'
    });
  } */

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-toggler">
          <a className="navbar-brand" href="#" >
            <img src={iconWhite} width="50" alt="logo" />
          </a>
          <ul className="navbar-nav d-flex justify-content-center align-items-center">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href='#about-me' >About me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className='nav-item'>
              <button className='rainbow-bg'>Download CV</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;