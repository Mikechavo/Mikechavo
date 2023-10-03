import React from 'react';
import arrow from '../icons/arrow.png';
import army_image from '../icons/army_image.jpg';
import '../App.css';
import PasswordGen from '../components/PasswordGen';
import TicTacToe from '../components/TicTacToe';
import PigLatin from '../components/PigLatin';

const Projects = () => {
  return (
     

          <section id='Projects1' className='projects-section'>
            <h1 className='projectsTitle'>Projects</h1>
            <div className="Project">
              <u><h3>PintPal</h3></u>
              <h4>A Fullstack beer community/review application using React, Ruby on Rails and PostgreSQL.</h4>
              <h4>Full functionality with CRUD.</h4>
              <a href="https://pintpal.onrender.com/">
                <button className="buttons">Live Site</button>
              </a>
            </div>
            <div className="Project">
              <u><h2>Tic-Tac-Toe</h2></u>
              <p>This is a Web game for two players on the same screen taking turns.</p>
              <TicTacToe /> 
            </div>
    
            <div className="Project">
             <u><h2>Pig Latin</h2></u>
              <PigLatin />
            </div>
    
            <div className="Project">
              <u><h2>Password Generator</h2></u>
              <p>Generates a random password using an existing password while keeping the same number of caps, numbers and special characters. Only the letters will be generated randomly.</p>
              <br />
              <PasswordGen />
            </div>
    
            <div className="Project">
              <u><h2>Ruby Text Based Game</h2></u>
              <h4>Text based game using Ruby.</h4>
              <a href="https://github.com/learn-academy-2023-echo/text-based-game-mpr">
                <button className="buttons">Source code</button>
              </a>
            </div>
    
            <div className="Project">
              <u><h3>Blog Post Application</h3></u>
              <h4>Application where the user can see all blog posts.</h4>
              <a href="https://github.com/learn-academy-2023-echo/full-stack-rails-fullstack-mc-pj">
                <button className="buttons">Source code</button>
              </a>
            </div>
            <div className="Project">
              <u><h3>Fictional Dating Application</h3></u>
              <h4>A Fullstack dating application using React and Ruby on Rails.</h4>
              <a href="https://github.com/learn-academy-2023-echo/cat-tinder-frontend-fiction-dateme-mike-graham">
                <button className="buttons">Frontend Source code</button>
              </a>
              <a href="https://github.com/learn-academy-2023-echo/cat-tinder-backend-fiction-dateme-mike-graham">
                <button className="buttons">Backend Source code</button>
              </a>
            </div>
            <div className="Project">
              <u><h3>Cribz</h3></u>
              <h4>A Fullstack home application using React and Ruby on Rails.</h4>
              <a href="https://github.com/learn-academy-2023-echo/apartment-app-frontend-cribz">
                <button className="buttons">Frontend Source code</button>
              </a>
              <a href="https://github.com/learn-academy-2023-echo/apartment-app-backend-cribz">
                <button className="buttons">Backend Source code</button>
              </a>
            </div>
          </section>
  )
}

export default Projects;