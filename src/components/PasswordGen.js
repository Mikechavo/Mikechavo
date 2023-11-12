import React, { useState } from 'react';
import "../App.css";
import { Button, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

const generateRandomLetter = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
};

const PasswordGen = (args) => {
  const [userInput, setUserInput] = useState('');
  const [randomOutput, setRandomOutput] = useState('');
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const generateRandomOutput = () => {
    const inputArray = userInput.split('');

    let output = '';

    for (const char of inputArray) {
      if (/[a-zA-Z]/.test(char)) {
        const randomChar = generateRandomLetter();
        output += char.toLowerCase() === char ? randomChar : randomChar.toUpperCase();
      } else {
        output += char;
      }
    }

    setRandomOutput(output);
  };

  const clearInput = () => {
    setUserInput('');
    setRandomOutput('');
  };

  return (
    <>
      <Button color="danger" onClick={toggle}>Demo</Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalBody>

          <div>
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Enter Existing Password"
            />

            <div>
              <Button color="success" onClick={generateRandomOutput}>Generate Random Password</Button>
            </div>
            <Button color="danger" onClick={clearInput}>Clear</Button>

            <h2 className="">Password:</h2>
            <u><h3 className=''> {randomOutput}</h3></u>
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

export default PasswordGen;