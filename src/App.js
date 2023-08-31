// import React from 'react';
// import PigLatin from './components/PigLatin';
// import Skill from './components/Skill';
// import Journey from './components/Journey';
// import ContactMe from './components/ContactMe';
// import './App.css';
// import ai_image from './icons/ai_image.jpg';
// import PasswordGen from './components/PasswordGen';
// import TicTacToe from './components/TicTacToe';

// const App = () => {
//   return (
//     <div className="App">
//       <div class="background-animation"></div>
//       <header className="App-header">
//         <a>
//           <img id="myimage" src={ai_image} alt="AI picture of me"></img>
//         </a>
//         <nav>
//           <p>
//             <a className='contactButton' href="#Journey">About Me |</a>
//             <a className='contactButton' href="#Projects1"> Projects |</a>
//             <a className='contactButton' href="#Contact">Contact Me </a>
//           </p>
//         </nav>
//         <h1>Hi. I'm Mike.</h1>
//         <h1>I'm a Full Stack Developer</h1>
//       </header>

//       <h2>Skills</h2>
//       <Skill />

//       <div id='Journey'>
//         <h2>My Software Development Journey</h2>
//         <Journey />
//       </div>

//       <h1>Projects</h1>

//       <section id='Projects1'>
//         <div className="Project">
//           <h2>Tic-Tac-Toe</h2>
//           <p>This is a Web game for two players on the same screen taking turns.</p>
//           <TicTacToe /> 
//         </div>

//         <div className="Project">
//           <h2>Pig Latin</h2>
//           <PigLatin />
//         </div>

//         <div className="Project">
//           <h2>Password Generator</h2>
//           <p>Generates a random password using an existing password or phrase that's easy for you to remember.</p>
//           <PasswordGen />
//         </div>

//         <div className="Project">
//           <h3>Ruby Text Based Game</h3>
//           <p>Text Based game using Ruby.</p>
//           <a href="https://github.com/learn-academy-2023-echo/text-based-game-mpr">
//             <button className="buttons">Source code</button>
//           </a>
//         </div>

//         <div className="Project">
//           <h3>Blog Post Application</h3>
//           <p>Application where the user can see all blog posts.</p>
//           <a href="https://github.com/learn-academy-2023-echo/full-stack-rails-fullstack-mc-pj">
//             <button className="buttons">Source code</button>
//           </a>
//         </div>
//       </section>

//       <h2>Contact Me</h2>
//       <div className='Contact'>
//         <ContactMe />
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import TabComponent from './components/TabComponent';  // Check the path
import Skill from './components/Skill';  // Check the path
import Journey from './components/Journey';
import Projects from './components/Projects';
import HomePage from './components/HomePage';


const App = () => {
  const tabs = [
    { title: 'Home', content: <HomePage /> },
    { title: 'Skills', content: <Skill /> },
    { title: 'My Journey', content: <Journey /> },
    { title: 'Projects', content: <Projects /> }
  ];

  return (
    <div className="App">
       <div class="background-animation"></div>
       <header className="App-header">
         
      </header>
      <TabComponent tabs={tabs} defaultTab={0} />
    </div>
  );
}

export default App;