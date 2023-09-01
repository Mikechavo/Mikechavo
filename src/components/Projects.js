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
              <h2>Tic-Tac-Toe</h2>
              <p>This is a Web game for two players on the same screen taking turns.</p>
              <TicTacToe /> 
            </div>
    
            <div className="Project">
              <h2>Pig Latin</h2>
              <PigLatin />
            </div>
    
            <div className="Project">
              <h2>Password Generator</h2>
              <p>Generates a random password using an existing password while keeping the same number of caps, numbers and special characters. Only the letters will be generated randomly.</p>
              <br />
              <PasswordGen />
            </div>
    
            <div className="Project">
              <h2>Ruby Text Based Game</h2>
              <h4>Text based game using Ruby.</h4>
              <a href="https://github.com/learn-academy-2023-echo/text-based-game-mpr">
                <button className="buttons">Source code</button>
              </a>
            </div>
    
            <div className="Project">
              <h3>Blog Post Application</h3>
              <h4>Application where the user can see all blog posts.</h4>
              <a href="https://github.com/learn-academy-2023-echo/full-stack-rails-fullstack-mc-pj">
                <button className="buttons">Source code</button>
              </a>
            </div>
          </section>
  )
}

export default Projects;