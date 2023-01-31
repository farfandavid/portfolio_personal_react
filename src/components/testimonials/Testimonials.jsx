import './styles/Testimonials.css'

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section-light">
      <h2 className="section-title rainbow-bg">Testimonials</h2>
      <h3 className="section-description">These are some testimonials from my clients...</h3>
      {/* <!-- Carousel --> */}
      <div id="testimonials-carousel" className="carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <img className="testimony-image rounded-circle" src="./image/cliente1.svg" alt="Client 1" />
              <p className="testimony-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores amet, voluptas
                deserunt obcaecati neque natus.</p>
              <div className="testimony-info">
                <p className="client">Gino</p>
                <p className="job">Project Manager</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <img className="testimony-image rounded-circle" src="./image/cliente2.svg" alt="Client 2" />
              <p className="testimony-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores amet, voluptas
                deserunt obcaecati neque natus.</p>
              <div className="testimony-info">
                <p className="client">Mary</p>
                <p className="job">Web Developer</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <img className="testimony-image rounded-circle" src="./image/cliente3.svg" alt="Client 3" />
              <p className="testimony-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores amet, voluptas
                deserunt obcaecati neque natus.</p>
              <div className="testimony-info">
                <p className="client">John</p>
                <p className="job">UX UI Designer</p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonials-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonials-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Testimonials;