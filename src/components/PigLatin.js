import React, { useState } from "react";
import "../App.css";

const PigLatin = () => {
  const [userInput, setUserInput] = useState("");
  const [translatedWords, setTranslatedWords] = useState("");

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
          <button className="buttons" onClick={setUpPreventDefault}>Submit</button>
          <button className="buttons" onClick={restartGame}>Clear</button>
        </div>
        <h3 className="piggyOutput">{translatedWords}</h3> {/* Display translated words */}
      </div>
     
    </div>
  );
};

export default PigLatin;