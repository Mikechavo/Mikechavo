import React, { useState } from 'react';
import Square from './Square';
import { Button, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

const TicTacToe = (args) => {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xNext, setXNext] = useState(true);
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

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
    <>
    
    <Button color="danger" onClick={toggle}>Demo</Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalBody>
          <div id="game-container"> 
      <div className="box">
        {squares.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
      <div>
        <h4 className="status">{status}</h4>
        <button type="button" class="btn btn-success" onClick={refresh}>
          Play again
        </button>
      </div>
    </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
        </>
  );
};


export default TicTacToe;