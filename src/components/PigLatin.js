import React, { useState } from "react";
import "../App.css";
import { Button, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

const PigLatin = (args) => {
  const [userInput, setUserInput] = useState("");
  const [translatedWords, setTranslatedWords] = useState("");
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  const myPigLatinCodeHere = () => {
    const arrayOfUserInput = userInput.split(" ");
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => { if (eachWord.trim() === '') {
      return '';
    }
      const vowels = ["a", "e", "i", "o", "u"];
      let translatedWord = eachWord;

      const firstChar = eachWord[0].toLowerCase();
      if (vowels.includes(firstChar)) {
        translatedWord += "way";
      } else {
        let consonantCluster = "";
        let i = 0;

        while (i < eachWord.length && !vowels.includes(eachWord[i].toLowerCase())) {
          consonantCluster += eachWord[i];
          i++;
        }

        if (consonantCluster.length > 0) {
          translatedWord = eachWord.slice(consonantCluster.length) + consonantCluster + "ay";
        }
      }

      return translatedWord;
    });

    const translatedWordsString = translatedWordsArray.join(" ");
    setTranslatedWords(translatedWordsString);
  };

  const restartGame = () => {
    setUserInput("");
    setTranslatedWords("");  // Reset translated words
  };

  const setUpPreventDefault = (e) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      myPigLatinCodeHere();
    }
  };
  

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  return (

    <>
    <Button color="danger" onClick={toggle}>Demo</Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalBody>
          <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <h3>Translates the user input into Pig Latin.</h3>
        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <br />
          <Button color="success" onClick={setUpPreventDefault}>Submit</Button>
          <Button color="danger" onClick={restartGame}>Clear</Button>
        </div>
        <h3 className="piggyOutput">{translatedWords}</h3> {/* Display translated words */}
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

export default PigLatin;