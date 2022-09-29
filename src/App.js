import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const REMAINING_TIME = 5;

  const [text, setText] = useState("");
  const [time, setTime] = useState(REMAINING_TIME);
  const [gameOn, setGameOn] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [isDisabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const wordsCount = (str) => {
    return str.split(" ").filter((char) => char !== "").length;
  };

  const lettersCount = (str) => {
    return str.split("").filter((char) => char !== " ").length;
  };

  const startGame = () => {
    setGameOn(true);
    setTime(REMAINING_TIME);
    setText("");
    setWordCount(0);
    setLetterCount(0);
    setDisabled(true);
  };

  const endGame = () => {
    setGameOn(false);
    setWordCount(wordsCount(text));
    setLetterCount(lettersCount(text));
  };

  const refreshScreen = () => {
    setText('');
    setWordCount(0);
    setLetterCount(0);
  }

  useEffect(() => {
    if (gameOn && time !== 0) {
      setTimeout(() => setTime((prevTime) => prevTime - 1), 1000);
    } else if (time === 0) {
      endGame();
      setDisabled(false);
    }
  }, [time, gameOn]);

  return (
    <div className="App">
      <h1>Let's check how fast you type!</h1>
      <textarea onChange={handleChange} value={text} disabled={!isDisabled} />
      <h4>Time remaining: {time}</h4>
      <div className="btn-container">
        <button onClick={startGame} disabled={isDisabled}>
          Start
        </button>
        <button onClick={refreshScreen} disabled={isDisabled}>Refresh</button>
      </div>
      <h1>words count: {wordCount} </h1>
      <h1>letters count: {letterCount} </h1>
    </div>
  );
}

export default App;
