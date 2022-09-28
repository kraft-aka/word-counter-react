import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [time, setTime] = useState(5);
  const [gameOn, setGameOn] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [isDisabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const wordsCount = (str) => {
    return str.split(" ").filter((char) => char !== "").length;
  };

  const startGame = () => {
    setGameOn(true);
    setTime(5);
    setText("");
    setWordCount(0);
    setDisabled(true);
  };

  const endGame = () => {
    setGameOn(false);
    setWordCount(wordsCount(text));
  };

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
      <h1>Let's check how fast do you type!</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: {time}</h4>
      <button onClick={startGame} disabled={isDisabled}>
        Start
      </button>
      <h1>words count: {wordCount} </h1>
    </div>
  );
}

export default App;
