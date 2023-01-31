import './App.css';
import AboutMe from './components/aboutMe/AboutMe';
import Hero from './components/hero/Hero';
import NavBar from './components/navbar/NavBar';
import Projects from './components/projects/Projects';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <div className='ln-div rainbow'></div>
      <AboutMe></AboutMe>
      <div className='ln-div rainbow'></div>
      <Projects></Projects>
      {/*<div className='ln-div rainbow'></div> */}
    </>
  );
}

export default App;
