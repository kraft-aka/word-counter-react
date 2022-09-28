import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [ text, setText ] = useState("");
  const [ time, setTime ] = useState(5)
  const [ gameOn, setGameOn ] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const wordsCount = (str) => {
    return str.split(' ').filter((char)=> char !== '').length
  }

  const handleClick = () => {
    setGameOn(true);
  }

  useEffect(()=> {
    if (gameOn && time !== 0) {
      setTimeout(()=> setTime(prevTime=> prevTime-1),1000 );
    } else if ( time === 0) {
      setGameOn(false)
    }
  }, [time, gameOn])

  return (
    <div className="App">
      <h1>Let's check how fast do you type!</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: {time}</h4>
      <button onClick={handleClick}>Start</button>
      <h1>words count: {wordsCount(text)} </h1>
    </div>
  );
}

export default App;
