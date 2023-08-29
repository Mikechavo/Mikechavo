import React, {useState} from 'react';
import PigLatin from './components/PigLatin'
import Skill from './components/Skill'
import Journey from './components/Journey'
// import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import './App.css';
import ai_image from './icons/ai_image.jpg';
// ====>
import Square from './components/Square'





const App = () => {
  const initialSquares = Array(9).fill(null)
  // ==>
  const [squares, setSquares] = useState(initialSquares)
  const [xNext, setxNext] = useState(true)
  const [playerSelect, setPlayerSelect] = useState("x")

const handleClick = (index) => {
  if (theWinner(squares)) {
    return
  }
  const squareUpdate = [...squares]
  if (squareUpdate[index]) {
    return }
    squareUpdate[index] = xNext ? "X" : "O" // conditional opertator for if-else: is xNext is true the expression equals X and if false equals 0
    setSquares(squareUpdate)
    setxNext(!xNext)
  
    
    const winner = theWinner(squareUpdate)
      if (winner) {
        alert(`The Winner is: ${winner} Player`)
      } else if (squareUpdate.every((square) => square !== null)) {
      alert("Draw!! Please restart the game.") 
      } else if (squareUpdate.every((square) => square === winner)) {
        alert("Restart!")
      }
      }
      const refresh = () => {
        setSquares(initialSquares)
    setxNext(true)
       }

    const theWinner = (squares) => {
      let winningThree = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]
      for(let i =0; i < winningThree.length; i++) {
        let[a, b, c] = winningThree[i]
        if(squares[a] && squares[a] === squares[b] && squares[a] == squares[c]) {
          return squares[a]
        }
    }
          return null
}

 let status 
 let winner = theWinner(squares)
 if (winner) {
  status = `The Winner is: ${winner} Player`
  
 } else {
  status = `Player ${xNext ? "X" : "O"} turn`
 }
 
//==>




  return (

    
    <div className="App">
      <div class="background-animation"></div>
      <header className="App-header">
        <a>
          <img id="myimage" src={ai_image} alt="AI picture of me"></img>
        </a>
        <nav>
          <p>
          <a className='contactButton' href="#Journey">About Me |</a>
          <a className='contactButton' href="#Projects1"> Projects |</a>
          <a className='contactButton' href="#Contact">Contact Me </a>
          </p>
        </nav>
        <h1>Hi. I'm Mike.</h1>
        
        <h1>I'm a Full Stack Developer</h1>
      </header>

      <h2>Skills</h2>
      <Skill />

      <div id='Journey'>
      <h2>My Software Development Journey</h2>
      <Journey />
      </div>

      <h1>Projects</h1>
      {/* <Projects /> */}

      <section id= 'Projects1'>
      <div className="Project">
        <h2>Tic-Tac-Toe</h2>
        <p>This is a Web game for two players on the same screen taking turns.</p>
      <div className="game-container">
        <div className="box">
          {squares.map((value, index) => (
            <Square key={index} value={value} onClick={() => handleClick(index)} />
          ))}
        </div>
        </div>
        <div className="status">{status}</div>
        <button className="buttons" onClick={refresh}>Play again</button>
        

      </div>
      <div className="Project">
       
            <PigLatin />
      
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

      <h2>Contact Me</h2>
      <div className='Contact'>
      <ContactMe />
      </div>
    </div>
  );
}

export default App;
