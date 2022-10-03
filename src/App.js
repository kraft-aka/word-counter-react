import React from "react";
import useGameLogic from "./hooks/useGameLogic";
import "./App.css";

function App() {
  const {
    handleChange,
    text,
    isDisabled,
    inputRef,
    time,
    startGame,
    refreshScreen,
    wordCount,
    letterCount,
  } = useGameLogic();

  return (
    <div className="App">
      <h1>Let's check how fast you type!</h1>
      <textarea onChange={handleChange} value={text} disabled={!isDisabled} ref={inputRef} />
      <h2>Time remaining: {time}</h2>
      <div className="btn-container">
        <button onClick={startGame} disabled={isDisabled}>
          Start
        </button>
        <button onClick={refreshScreen} disabled={isDisabled}>Refresh</button>
      </div>
      <div className="count-container">
      <h1>words count: {wordCount} </h1>
      <h1>letters count: {letterCount} </h1>
      </div>
      
    </div>
  );
}

export default App;
