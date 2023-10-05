import React, { useState } from 'react';
import arrow from '../icons/arrow.png';
import army_image from '../icons/army_image.jpg';
import '../App.css';
import PasswordGen from '../components/PasswordGen';
import TicTacToe from '../components/TicTacToe';
import PigLatin from '../components/PigLatin';
import { Button, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

const Projects = (args) => {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (


    <section id='Projects1' className='projects-section'>
      <h1 className='projectsTitle'>Projects</h1>
      <div className="Project">
        <u><h2>PintPal</h2></u>
        <p>A Fullstack beer community/review application using React, Ruby on Rails and PostgreSQL.</p>
        <p>Full functionality with CRUD.</p>
        <Button color="danger" href="https://pintpal.onrender.com/">
          Live Site</Button>
        
      </div>
      <div className="Project">
        <u><h2>Tic-Tac-Toe</h2></u>
        <p>This is a Web game for two players on the same screen taking turns.</p>
        <TicTacToe />
      </div>
      <br />

      <div className="Project">
        <u><h2>Pig Latin</h2></u>
        <p>Translates the user input into Pig Latin.</p>
        <PigLatin />
      </div>
      <br />

      <div className="Project">
        <b><u><h2>Password Generator</h2></u></b>
        <p>Generates a random password using an existing password while keeping the same number of caps, numbers and special characters. Only the letters will be generated randomly.</p>
      
        <PasswordGen />
      </div>
      <br />

      <div className="Project">
        <u><h2>Ruby Text Based Game</h2></u>
        <p>Text based game using Ruby.</p>
        <Button color="danger" href="https://github.com/learn-academy-2023-echo/text-based-game-mpr">
          Source code</Button>
      </div>
      <br/>

      <div className="Project">
        <u><h2>Blog Post Application</h2></u>
        <p>Application where the user can see all blog posts.</p>
        <Button color="danger"href="https://github.com/learn-academy-2023-echo/full-stack-rails-fullstack-mc-pj">
          Source code</Button>
      </div>
      <br/>

      <div className="Project">
        <u><h2>Fictional Dating Application</h2></u>
        <p>A Fullstack dating application using React and Ruby on Rails.</p>
        <Button color="danger" href="https://github.com/learn-academy-2023-echo/cat-tinder-frontend-fiction-dateme-mike-graham">
          Frontend Source code</Button>
        
          <Button color="danger" href="https://github.com/learn-academy-2023-echo/cat-tinder-backend-fiction-dateme-mike-graham">
          Backend Source code</Button>
      </div>
      <br/>

      <div className="Project">
        <u><h2>Cribz</h2></u>
        <p>A Fullstack home application using React and Ruby on Rails.</p>
         <Button color="danger" href="https://github.com/learn-academy-2023-echo/apartment-app-frontend-cribz">
          Frontend Source code</Button>
        
          <Button color="danger" href="https://github.com/learn-academy-2023-echo/apartment-app-backend-cribz">Backend Source code</Button>
      </div>
    </section>
  )
}

export default Projects;