import React from 'react';
import './App.css';
import github from './icons/github.png';
import linkedin from './icons/linkedin.png';
import emailLogo from './icons/emailLogo.png';
import arrow from './icons/arrow.png';

const App = () => {
  return (
    <div className="App">
      <div class="background-animation"></div>
      <header className="App-header">
      <img id="myimage" src="https://mikechavo.carrd.co/assets/images/image01.jpg?v=8cf942e5" alt="AI picture of me"></img>
        <h1>Hi. I'm Mike.</h1>
        <h1>I'm a Full Stack Developer</h1>
      </header>
      <section className="Skills">
        <h2>Skills</h2>
        <img id="myimage" src="https://mikechavo.carrd.co/assets/images/image02.jpg?v=8cf942e5" alt="AI picture of me"></img>
      </section>
      <section className="Journey">
        <h2>My Software Development Journey</h2>
        <p>I started my career studying Computer Science back in 2017</p>
        <p>The first time I really implemented code was when I worked at Uber as Technical Sourcer, I built automation tools with Google Apps Script.</p>
        <a><img src={arrow} alt="arrow" className="icon-logo" /></a>
        <h2>University of Maryland Global Campus</h2>
        <h4>2017 - 2018</h4>
        <img id="myimage" src="https://mikechavo.carrd.co/assets/images/image03.jpg?v=8cf942e5" alt="AI picture of me"></img>
        <p>I started studying Computer Science at University of Maryland Global Campus while serving in the US Army. This where I started learning C and C++.</p>
        <a><img src={arrow} alt="arrow" className="icon-logo" /></a>
        <h2>Uber</h2>
        <h4>2021 - 2023</h4>
        <p>This is where I finally got introduced into the tech industry and taught myself Google App’s Script(HTML & JavaScript). Though coding wasn’t part of my Job description as Sourcer I wanted to make things easier with automation for my organization. Using Google Sheets, LinkedIn, Beamery and internal dashboards I was to create multiple automation tools for different use cases.</p>
        <a><img src={arrow} alt="arrow" className="icon-logo" /></a>
        <h2>LEARN Academy</h2>
        <h4>2023</h4>
        <p>I wanted to have more structure to the learning process of Software Development so I enrolled into LEARN’s Fullstack development bootcamp.</p>
        <a><img src={arrow} alt="arrow" className="icon-logo" /></a>
        <h2>Projects</h2>
        <div className="Project">
          <h3>Tic-Tac-Toe</h3>
          <p>This is a Web game for two players on the same screen taking turns.</p>
          <a href="https://github.com/learn-academy-2023-echo/tic-tac- toe-naughts-and-crosses"><button className="buttons">Source code</button></a>
        </div>
        <div className="Project">
        <h3>Pig Latin Translator</h3>
          <p>Translates the user input into Pig Latin.</p>
          <a href="https://github.com/learn-academy-2023-echo/pig-latin-pork-grindz"><button className="buttons">Source code</button></a>
        </div>
        <div className="Project">
        <h3>Ruby Text Based Game</h3>
          <p>Text Based game using Ruby.</p>
          <a href="https://github.com/learn-academy-2023-echo/text-based-game-mpr"><button className="buttons">Source code</button></a>
        </div>
        <div className="Project">
        <h3>Blog Post Application</h3>
          <p>Application where the user can see all blog posts.</p>
          <a href="https://github.com/learn-academy-2023-echo/full-stack-rails-fullstack-mc-pj"><button className="buttons">Source code</button></a>
        </div>
        
      </section>
      <section className="Contact">
        <h2>Contact Me</h2>
        <p>You can reach out to me via:</p>
        <ul>
          <p>
          <div className="email-icon">
              <a href="mailto:mchavez76@yahoo.com">
                <img src={emailLogo} alt="Email" className="icon-logo" />
              </a>
            </div>
          </p>    
  <a href="https://github.com/Mikechavo"><img src={github} alt="GitHub" className="icon-logo" /></a>
<p>
  <a href="https://www.linkedin.com/in/michael-t-chavez/"><img src={linkedin} alt="LinkedIn" className="icon-logo" /></a>
</p>
        </ul>
      </section>
    </div>
  );
}

export default App;
