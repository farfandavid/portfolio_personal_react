import './styles/NavBar.css'

function NavBar() {

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-transparent">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-toggler">
          <a className="navbar-brand" href="#about-me" >
            <img src="./image/icon.png" width="50" alt="logo" />
          </a>
          <ul className="navbar-nav d-flex justify-content-center align-items-center">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#about-me">About me</a>
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