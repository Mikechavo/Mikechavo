import React, { useState } from 'react';
import arrow from '../icons/arrow.png';
import army_image from '../icons/army_image.jpg';
import stable from '../icons/stable.png';
import PintPal from '../icons/PintPal.png'
import TicTac from '../icons/TicTac.png'
import JJK from '../icons/JJK.png'
import Pig from '../icons/Pig.png'
import Password from '../icons/Password.png'
import FitFolio from '../icons/fitFolio.png'
import PalH from '../icons/palHome.png'
import PcPart from '../icons/pcPart.png'
import Flare from '../icons/flare.png'
import '../App.css';
import PasswordGen from '../components/PasswordGen';
import TicTacToe from '../components/TicTacToe';
import PigLatin from '../components/PigLatin';
import { Button, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody, CardText, CardTitle, CardSubtitle, CardImg } from "reactstrap"

const Projects = (args) => {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (


    <section id='Projects1' className='projects-section'>
      <h1 className='projectsTitle'>Projects</h1>

      <div className="Project">
        <u><h2>Mini-Paldex</h2></u>
        <div className='cards'>
          <Card color="" style={{ width: '50rem' }}>
            {/* <CardBody>
          
          </CardBody> */}
            <CardBody>
              <CardText>
                In this Fullstack application, I utilized Python, Django framework, and Bootstrap along with PostgreSQL to develop the Mini-Paldex app. The application serves as a comprehensive reference for Palworld Pals, containing essential data such as type, skills, work, drops, and price for all Palworld creatures. This website allows you to sign up and log in into your own Mini-Paldex so you can create as many combonations of Fire Teams of 5. One of the highlights of the project is the creation of a robust backend system  that seamlessly handles data storage and retrieval, ensuring a smooth user experience. This project showcases my skills in Fullstack development, data management, and creating a streamlined user experience
              </CardText>
              <CardText>
                Full functionality with CRUD.
              </CardText>
            </CardBody>
            <CardBody>
              <CardBody>
                <Button color="danger" href="https://github.com/Mikechavo/paldex">
                  Source Code</Button>
              </CardBody>
              <Button color="danger" href="https://paldex-seven.vercel.app/">
                Live Site</Button>
              <CardImg
                alt="Card image cap"
                src={PalH}
                style={{
                  height: 500
                }}
                top
                width="100%"
              />
              <CardBody></CardBody>
            </CardBody>
          </Card>
        </div>
      </div>
      <br />

      <div className="Project">
        <u><h2>PintPal</h2></u>
        <div className='cards'>
          <Card color="" style={{ width: '50rem' }}>
            {/* <CardBody>
          
          </CardBody> */}
            <CardBody>
              <CardText>
                A Fullstack beer community/review application is a comprehensive platform designed for beer enthusiasts. Built using React for dynamic user interfaces, Ruby on Rails for robust backend functionality, and PostgreSQL for efficient data management, this application provides a seamless experience for users to explore, share, and review a wide variety of craft beers. Users can connect with like-minded beer lovers, post reviews, and dive into the rich world of craft brews. It's the ultimate destination for beer aficionados looking to discover and discuss their favorite beverages.
              </CardText>
              <CardText>
                Full functionality with CRUD.
              </CardText>
            </CardBody>
            <CardBody>
              <Button color="danger" href="https://pintpal.onrender.com/">
                Live Site</Button>
              <CardImg
                alt="Card image cap"
                src={PintPal}
                style={{
                  height: 500
                }}
                top
                width="100%"
              />
            </CardBody>
          </Card>
        </div>
      </div>
      <br />

      <div className="Project">
        <u><h2>My Favorite Anime</h2></u>
        <div className='cards'>
          <Card color="" style={{ width: '50rem' }}>
            {/* <CardBody>
          
          </CardBody> */}
            <CardBody>
              <CardText>
              My Favorite Anime is a frontend application that showcases a curated list of my favorite anime titles. Developed using React, JavaScript, Reactstrap, and Bootstrap, this project is a passion project. As an anime enthusiast and frontend developer, My Favorite Anime serves as both a personal reference and a showcase of my skills. It's a fun project that allows me to combine my passion for anime with my expertise in frontend development.
              </CardText>
            </CardBody>
            <CardBody>
              <Button color="danger" href="https://my-favorite-anime.netlify.app/">
                Live Site</Button>
              <CardImg
                alt="Card image cap"
                src={JJK}
                style={{
                  height: 500
                }}
                top
                width="100%"
              />
            </CardBody>
          </Card>
        </div>
      </div>
      <br />

      <div className="Project">
        <u><h2>PC Part Inventory Management System</h2></u>
        <div className='cards'>
          <Card color="" style={{ width: '50rem' }}>
            {/* <CardBody>
          
          </CardBody> */}
            <CardBody>
              <CardText>
              The PC Part Inventory Management System is a Java application aimed at improving my Java programming skills. It utilizes JavaFX for a user-friendly interface displaying essential details of PC parts, such as ID, name, brand, quantity, and price. Developed independently, the project focuses on JavaFX GUI development, object-oriented programming, and data modeling. While still a work in progress, future plans include implementing CRUD operations, data persistence, and search/filtering functionalities. Open to collaboration and feedback, the project serves as a practical learning experience to deepen my understanding of Java programming concepts and software development principles.
              </CardText>
            </CardBody>
            <CardBody>
              <CardBody>
                <Button color="danger" href="https://github.com/Mikechavo/PcInventoryManagement">
                  GUI Source Code</Button>
              </CardBody>
              <CardImg
                alt="Card image cap"
                src={PcPart}
                // style={{
                //   height: 500
                // }}
                top
                width="100%"
              />
            </CardBody>
          </Card>
        </div>
      </div>
      <br />

      <div className="Project">
        <u><h2>FitFolio</h2></u>
        <div className='cards'>
          <Card color="" style={{ width: '50rem' }}>
            {/* <CardBody>
          
          </CardBody> */}
            <CardBody>
              <CardText>
                A Fullstack application using React, Javascript, Reactstrap, PostgreSQL and Ruby on Rails that allows you to craft your perfect workout with Fitfolio! Tailor routines to your goals, choose from a variety of exercises, and track progress effortlessly. User-friendly, flexible, and designed for your fitness journey. Stay tuned in for updates as I refine and enhance this fitness journey companion!
              </CardText>
            </CardBody>
            <CardBody>
              <CardBody>
                <Button color="danger" href="https://github.com/Mikechavo/workout_frontend">
                  Frontend Source Code</Button>
              </CardBody>
              <CardBody>
                <Button color="danger" href="https://github.com/Mikechavo/workout_backend">Backend Source Code</Button>
              </CardBody>
              <CardImg
                alt="Card image cap"
                src={FitFolio}
                style={{
                  height: 500
                }}
                top
                width="100%"
              />
            </CardBody>
          </Card>
        </div>
      </div>
      <br />


      <div className="Project">
        <u><h2>Project Flare:</h2></u>
        <u><h2>Automated Candidate Management Tool at Uber</h2></u>
        <div className='cards'>
          <Card color="" style={{ width: '50rem' }}>
            {/* <CardBody>
          
          </CardBody> */}
            <CardBody>
              <CardText>
                I designed, developed, and launched Project Flare at Uber, a powerful automation tool utilizing Google Apps Script, Gsheets, Gmail, and integrated it seamlessly into an internal dashboard. My role involved conceptualizing the solution, overseeing the development process, and successfully launching the tool. Project Flare efficiently identified stale candidates in the recruitment pipeline and automated personalized emails to prompt Talent Acquisition (TA) team members for data hygiene reviews. This initiative significantly enhanced the efficiency and organization of Uber's talent acquisition processes.
              </CardText>
            </CardBody>

            <CardTitle><strong>Key Contributions:</strong></CardTitle>

            <CardBody>
              <CardText>
                <u>End-to-End Ownership:</u> Led the entire lifecycle of Project Flare, from conceptualization and design to development and successful deployment.
              </CardText>
            </CardBody>

            <CardBody>
              <CardText>
                <u>Stale Candidate Identification:</u> Systematically designed the process for scrubbing candidate ownership data to accurately identify stale candidates.
              </CardText>
            </CardBody>

            <CardBody>
              <CardText>
                <u>Automated Email Generation:</u> Orchestrated the automation of personalized emails sent to TA members, including critical candidate details and requisition information.
              </CardText>
            </CardBody>

            <CardBody>
              <CardText>
                <u>Internal Dashboard Integration: </u>  Ensured seamless integration with an internal dashboard for real-time visibility into candidate hygiene initiatives.
              </CardText>
            </CardBody>

            <CardTitle><strong>Impact:</strong></CardTitle>
            <CardBody>
              <CardText>
                Project Flare stands as a testament to my ability to take ownership of complex projects, design effective automation solutions, and drive positive outcomes. The tool significantly streamlined Uber's recruitment pipeline, showcasing my proficiency in technology-driven process improvements.
              </CardText>
            </CardBody>

            <CardTitle><strong>Technologies Used:</strong></CardTitle>
            <CardBody>
              <CardText>
                Google Apps Script(HTML, CSS, Javascript)
              </CardText>
              <CardText>
                SQL
              </CardText>
              <CardText>
                Google Sheets
              </CardText>
              <CardText>
                Gmail
              </CardText>
              <CardText>
                Gmail
              </CardText>
              Internal Dashboard
            </CardBody>


            <CardBody>
              <CardBody>
                <Button color="danger" href="https://github.com/Mikechavo/Project-Beacon-Flare-GAS/blob/main/flareGetEmail.js">
                  Source Code</Button>
              </CardBody>
              <CardBody>
                <Button color="danger" href="https://docs.google.com/spreadsheets/d/1HIRP86Fj51r3kcNx-BltYzuDliUY_pO4gMQIVr3w6K4/edit#gid=913754463">
                  Demo</Button>
              </CardBody>
              <CardImg
                alt="Card image cap"
                src={Flare}
                style={{
                  height: 500
                }}
                top
                width="100%"
              />
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
                This is a classic Tic-Tac-Toe game designed for two players to enjoy on the same screen. The game offers a simple yet engaging experience, with players taking turns to compete in this age-old battle of Xs and Os. It's a perfect way to have fun and test your strategic skills against a friend or family member without the need for any installations or downloads.
              </CardText>
            </CardBody>
            <CardBody>
              <TicTacToe />
            </CardBody>
            <CardImg
              alt="Card image cap"
              src={TicTac}
              style={{
                height: 500
              }}
              top
              width="100%"
            />
          </Card>
        </div>
      </div>
      <br />

      <div className="Project">
        <u><h2>Pig Latin Translator</h2></u>
        <div className='cards'>
          <Card color="" style={{ width: '50rem' }}>
            <CardBody>
              <CardText>
                This is a handy Pig Latin translator that takes user input and converts it into Pig Latin. Whether you want to have some fun with language or simply explore the quirky world of Pig Latin, this tool provides a quick and easy way to translate your text into this playful and entertaining language.
              </CardText>
            </CardBody>
            <CardBody>
              <PigLatin />
            </CardBody>
            <CardImg
              alt="Card image cap"
              src={Pig}
              style={{
                height: 500
              }}
              top
              width="100%"
            />
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
                This password generator is designed to enhance your password security while retaining the familiarity of your existing passwords. It creates random passwords by shuffling the letters while keeping the same number of capital letters, numbers, and special characters. This way, you can enjoy stronger password protection without the hassle of memorizing completely new passwords.
              </CardText>
            </CardBody>
            <CardBody>
              <PasswordGen />
            </CardBody>
            <CardImg
              alt="Card image cap"
              src={Password}
              style={{
                height: 500
              }}
              top
              width="100%"
            />
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
                This text-based game is a Ruby-based adventure that unfolds through your terminal. Immerse yourself in an interactive narrative where your choices shape the story's outcome. Will you be the hero or make choices that lead to unforeseen consequences? Test your decision-making skills and enjoy a captivating gaming experience in a purely text-based format.
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
                This Ruby on Rails Full Stack application empowers users to create and delete blog posts effortlessly. Whether you're a blogger, writer, or content enthusiast, you can easily manage your content with a straightforward interface. Share your thoughts, ideas, or stories with the world and maintain complete control over your posts through simple deletion options.
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
                Step into the imaginative world of our Fullstack dating application, where you can connect with fictional characters for a playful and enjoyable dating experience. This app, powered by React, Ruby on Rails, and PostgreSQL, lets you explore a unique dating adventure with fictional profiles. Swipe, match, chat, and embark on fun interactions with fictional characters to make your dating journey a delightful experience.
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
                This Fullstack app using React, Ruby on Rails, and PostgreSQL. It showcases full CRUD functionality. Allowing users to explore, login, sign out, create, modify, and remove imaginary home listings.
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
        <br />

        <div className="Project">
          <u><h2>To Do List</h2></u>
          <div className='cards'>
            <Card color="" style={{ width: '50rem' }}>
              <CardBody>
                <CardText>
                  A simple and straightforward to-do list application built with Python. Create and manage your tasks effortlessly.
                </CardText>
              </CardBody>
              <CardBody>
                <Button color="danger" href="https://github.com/Mikechavo/To_do_list_python">
                  Source Code</Button>
              </CardBody>
            </Card>
          </div>
        </div>
        <br />

        <div className="Project">
          <u><h2>Gradio-Based Browser Interface for Stable Diffusion</h2></u>
          <div className='cards'>
            <Card color="" style={{ width: '50rem' }}>
              <CardBody>
                <b><CardTitle>
                  Description:
                </CardTitle></b>
                <CardText>
                  This project involves a browser interface built with the Gradio library that provides a user-friendly front-end to interact with Stable Diffusion, a cutting-edge machine learning technique. While I didn't create the original repository, I have been learning from experienced developers. Through collaboration on this project, I've gained valuable experience in machine learning and deep learning techniques, particularly in the context of generative models. This project has equipped me with skills and knowledge that I continue to apply in my work. Please note that this is a collaborative effort, and the original repository can be found
                  <Button color="success" href="https://github.com/AUTOMATIC1111/stable-diffusion-webui">here</Button>
                  <b><CardTitle>
                    Key Features:
                  </CardTitle></b>
                  <u><CardTitle>txt2img and img2img Modes:</CardTitle></u>
                  The interface supports both original txt2img and img2img modes for image generation.
                  <u><CardTitle>Ease of Use:</CardTitle></u>
                  With a one-click install and run script, this interface streamlines the process for running Stable Diffusion. However, Python and Git must be installed.
                  <u><CardTitle>Various Image Generation Techniques:</CardTitle></u>
                  You can use it for outpainting, inpainting, color sketching, prompt matrix, stable diffusion upscale, and more.
                  <u><CardTitle>Advanced Customization:</CardTitle></u>
                  The interface allows you to specify parts of text for the model to focus on, as well as offering options like loopback, X/Y/Z plot, textual inversion, and more.
                  <u><CardTitle> Extensions:</CardTitle></u>
                  Additional features like GPT-4 compatibility, custom prompts, and high-res image production are supported.
                  <u><CardTitle>API Support:</CardTitle></u>
                  It's compatible with RunwayML's inpainting model and offers an Aesthetic Gradients feature for generating images with specific aesthetics.
                </CardText>
              </CardBody>
              <CardBody>
                <CardImg
                  alt="Card image cap"
                  src={stable}
                  style={{
                    height: 500
                  }}
                  top
                  width="100%"
                />
                <Button color="danger" href="https://github.com/Mikechavo/stable-diffusion-webui">
                  Forked Repo</Button>
              </CardBody>
            </Card>
          </div>
        </div>




      </div>
    </section>
  )
}

export default Projects;