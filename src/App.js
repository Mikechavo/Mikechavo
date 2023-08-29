import React from 'react';
import Skill from './components/Skill'
import Journey from './components/Journey'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import './App.css';
import ai_image from './icons/ai_image.jpg';

// ====>





const App = () => {
  return (

    <div className="App">
      <div class="background-animation"></div>
      <header className="App-header">
        <a>
          <img id="myimage" src={ai_image} alt="AI picture of me"></img>
        </a>
        <h1>Hi. I'm Mike.</h1>
        <nav >
          <a className='contactButton' href="#Contact">Contact Me</a>
        </nav>
        <h1>I'm a Full Stack Developer</h1>
      </header>
      
      <h2>Skills</h2>
      <Skill />

      <h2>My Software Development Journey</h2>
      <Journey />

      <h2>Projects</h2>
      <Projects />

      <h2>Contact Me</h2>
      <ContactMe />

    </div>
  );
}

export default App;
