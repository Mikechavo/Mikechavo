import React from 'react';
import arrow from '../icons/arrow.png';
import army_image from '../icons/army_image.jpg';
import '../App.css';

const Projects = () => {
  return (
    <section>
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
  )
}

export default Projects;