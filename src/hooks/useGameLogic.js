import { useState, useEffect, useRef } from "react";

function useGameLogic(props) {
  const REMAINING_TIME = 10;

  const [text, setText] = useState("");
  const [time, setTime] = useState(REMAINING_TIME);
  const [gameOn, setGameOn] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [isDisabled, setDisabled] = useState(false);
  const inputRef = useRef(null);

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
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const endGame = () => {
    setGameOn(false);
    setWordCount(wordsCount(text));
    setLetterCount(lettersCount(text));
  };

  const refreshScreen = () => {
    setText("");
    setWordCount(0);
    setLetterCount(0);
  };

  useEffect(() => {
    if (gameOn && time !== 0) {
      setTimeout(() => setTime((prevTime) => prevTime - 1), 1000);
    } else if (time === 0) {
      endGame();
      setDisabled(false);
    }
  }, [time, gameOn]);

  return {
    handleChange,
    text,
    isDisabled,
    inputRef,
    time,
    startGame,
    refreshScreen,
    wordCount,
    letterCount,
  };
}

export default useGameLogic;
