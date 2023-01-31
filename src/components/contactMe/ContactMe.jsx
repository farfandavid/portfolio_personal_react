import './styles/ContactMe.css';

function ContactMe() {
  return (
    <section id="contact" className="contact section-dark">
      <div className="container">
        <div className="container text-center rainbow d-flex justify-content-evenly">
          <div className="row">
            <div className="col-12 col-md-4 section-title">
              Let's talk!
            </div>
            <div className="col-12 col-md-4 section-description">
              Contact me!
            </div>
            <div className="col-12 col-md-4">
              <a href="mailto: farfandavid34@gmail.com">
                <button type="button">
                  Contact
                  <i className="bi bi-envelope-check-fill"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;