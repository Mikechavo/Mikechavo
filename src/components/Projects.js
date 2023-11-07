import React, { useState } from 'react';
import arrow from '../icons/arrow.png';
import army_image from '../icons/army_image.jpg';
import '../App.css';
import PasswordGen from '../components/PasswordGen';
import TicTacToe from '../components/TicTacToe';
import PigLatin from '../components/PigLatin';
import { Button, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody, CardText, CardTitle, CardSubtitle } from "reactstrap"

const Projects = (args) => {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (


    <section id='Projects1' className='projects-section'>
      <h1 className='projectsTitle'>Projects</h1>
      <div className="Project">
        <u><h2>PintPal</h2></u>
        <div className='cards'>
          <Card color="" style={{ width: '50rem' }}>
            {/* <CardBody>
          
          </CardBody> */}
            <CardBody>
              <CardText>
                A Fullstack beer community/review application using React, Ruby on Rails and PostgreSQL.
              </CardText>
              <CardText>
                Full functionality with CRUD.
              </CardText>
            </CardBody>
            <CardBody>
              <Button color="danger" href="https://pintpal.onrender.com/">
                Live Site</Button>
            </CardBody>
          </Card>
        </div>
      </div>
      <br />

      <div className="Project">
        <u><h2>Tic-Tac-Toe</h2></u>
        <div className='cards'>
          <Card color="" style={{ width: '50rem' }}>
            <CardBody>
              <CardText>
                This is a Web game for two players on the same screen taking turns.
              </CardText>
            </CardBody>
            <CardBody>
              <TicTacToe />
            </CardBody>
          </Card>
        </div>
      </div>
      <br />

      <div className="Project">
        <u><h2>Pig Latin</h2></u>
        <div className='cards'>
          <Card color="" style={{ width: '50rem' }}>
            <CardBody>
              <CardText>
                Translates the user input into Pig Latin.
              </CardText>
            </CardBody>
            <CardBody>
              <PigLatin />
            </CardBody>
          </Card>
        </div>
      </div>
      <br />

      <div className="Project">
        <b><u><h2>Password Generator</h2></u></b>
        <div className='cards'>
          <Card color="" style={{ width: '50rem' }}>
            <CardBody>
              <CardText>
                Generates a random password using an existing password while keeping the same number of caps, numbers and special characters. Only the letters will be generated randomly.
              </CardText>
            </CardBody>
            <CardBody>
              <PasswordGen />
            </CardBody>
          </Card>
        </div>
      </div>
      <br />

      <div className="Project">
        <u><h2>Ruby Text Based Game</h2></u>
        <div className='cards'>
          <Card color="" style={{ width: '50rem' }}>
            <CardBody>
              <CardText>
                Text based game using Ruby.
              </CardText>
            </CardBody>
            <CardBody>
              <Button color="danger" href="https://github.com/learn-academy-2023-echo/text-based-game-mpr">
                Source Code</Button>
            </CardBody>
          </Card>
        </div>
      </div>
      <br />

      <div className="Project">
        <u><h2>Blog Post Application</h2></u>
        <div className='cards'>
          <Card color="" style={{ width: '50rem' }}>
            <CardBody>
              <CardText>
                Ruby on Rails Full Stack application where the user can create and delete blog post.
              </CardText>
            </CardBody>
            <CardBody>
              <Button color="danger" href="https://github.com/learn-academy-2023-echo/full-stack-rails-fullstack-mc-pj">
                Source Code</Button>
            </CardBody>
          </Card>
        </div>
      </div>
      <br />

      <div className="Project">
        <u><h2>Fictional Dating Application</h2></u>
        <div className='cards'>
          <Card color="" style={{ width: '50rem' }}>
            <CardBody>
              <CardText>
                A Fullstack dating application using React, Ruby on Rails and PostgreSQL.
              </CardText>
            </CardBody>
            <CardBody>
              <Button color="danger" href="https://github.com/learn-academy-2023-echo/cat-tinder-frontend-fiction-dateme-mike-graham">
                Frontend Source Code</Button>
            </CardBody>
            <CardBody>
              <Button color="danger" href="https://github.com/learn-academy-2023-echo/cat-tinder-backend-fiction-dateme-mike-graham">
                Backend Source Code</Button>
            </CardBody>
          </Card>
        </div>
      </div>
      <br />

      <div className="Project">
        <u><h2>Cribz</h2></u>
        <div className='cards'>
          <Card color="" style={{ width: '50rem' }}>
            <CardBody>
              <CardText>
                A Fullstack home buying application using React, Ruby on Rails and PostgreSQL.
              </CardText>
            </CardBody>
            <CardBody>
              <Button color="danger" href="https://github.com/learn-academy-2023-echo/apartment-app-frontend-cribz">
                Frontend Source Code</Button>
            </CardBody>
            <CardBody>
              <Button color="danger" href="https://github.com/learn-academy-2023-echo/apartment-app-backend-cribz">Backend Source Code</Button>
            </CardBody>
          </Card>
        </div>

        <div className="Project">
          <u><h2>To Do List</h2></u>
          <div className='cards'>
            <Card color="" style={{ width: '50rem' }}>
              <CardBody>
                <CardText>
                  Basic application where the user can make a to do list using Python.
                </CardText>
              </CardBody>
              <CardBody>
                <Button color="danger" href="https://github.com/Mikechavo/To_do_list_python">
                  Source Code</Button>
              </CardBody>
            </Card>
          </div>
        </div>




      </div>
    </section>
  )
}

export default Projects;