import React, { useState } from 'react';
import "../App.css";


const generateRandomLetter = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
};

const PasswordGen = () => {
  const [userInput, setUserInput] = useState('');
  const [randomOutput, setRandomOutput] = useState('');

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
    <div>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter your input"
      />
      <div>
      <button className="buttons" onClick={generateRandomOutput}>Generate Random Output</button>
      </div>
      <button className="buttons" onClick={clearInput}>Clear</button>
      
      <h2 className="passGen">Password: {randomOutput}</h2>
    </div>
  );
};

export default PasswordGen;