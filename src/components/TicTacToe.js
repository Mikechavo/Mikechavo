import React, { useState } from 'react';
import Square from './Square';

const TicTacToe = () => {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xNext, setXNext] = useState(true);

  const handleClick = (index) => {
    if (squares[index] || theWinner(squares)) {
      return;
    }

    const squareUpdate = [...squares];
    squareUpdate[index] = xNext ? 'X' : 'O';
    setSquares(squareUpdate);
    setXNext(!xNext);
  };

  const refresh = () => {
    setSquares(initialSquares);
    setXNext(true);
  };

  const theWinner = (squares) => {
    const winningThree = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningThree.length; i++) {
      const [a, b, c] = winningThree[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = theWinner(squares);
  let status;
  if (winner) {
    status = `The Winner is: ${winner} Player`;
  } else if (squares.every((square) => square !== null)) {
    status = 'Draw!! Please restart the game.';
  } else {
    status = `Player ${xNext ? 'X' : 'O'} turn`;
  }

  return (
    <div id="game-container"> 
      <div className="box">
        {squares.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
      <div>
        <h4 className="status">{status}</h4>
        <button className="buttons" onClick={refresh}>
          Play again
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;