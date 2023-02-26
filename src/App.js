import './App.css';
import AboutMe from './components/aboutMe/AboutMe';
import ContactMe from './components/contactMe/ContactMe';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import NavBar from './components/navbar/NavBar';
import Projects from './components/projects/Projects';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <div className='ln-div rainbow'></div>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <ContactMe></ContactMe>
      <Footer></Footer>

      {/*<div className='ln-div rainbow'></div> */}
    </>
  );
}

export default App;
