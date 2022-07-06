import React, { useState } from "react";
import { Props } from "./types";

const useWordInputLogic = ({
  index,
  usableWords,
  guesses,
  setGuesses,
  solution,
}: Props) => {
  const [currentGuess, setCurrentGuess] = useState<string[]>([...Array(5)]);

  const autoTab = (inputIndex: number, guessIndex: number): void => {
    document.getElementById(`${inputIndex}${guessIndex}`)?.focus();
  };

  const handleKeyUp = (e: React.KeyboardEvent, i: number): void => {
    let isCurrentGuessFull: boolean =
      currentGuess.filter((letter: string): string => letter && letter)
        .length === 5
        ? true
        : false;
    if (e.key === "backspace") {
      let inputToGoToIndex: number = i - 1 >= 0 ? i - 1 : i;
      autoTab(inputToGoToIndex, index);
    } else if (i === 4 && e.key === "Enter" && isCurrentGuessFull) {
      handleSubmit();
      autoTab(0, index + 1);
    } else if (i === 5 && isCurrentGuessFull) {
      handleSubmit();
      autoTab(0, index + 1);
    } else {
      let inputToGoToIndex: number = i + 1;
      autoTab(inputToGoToIndex, index);
    }
  };

  const handleSubmit = (): void => {
    let word: string = currentGuess.join("");
    if (usableWords.includes(word) && !guesses.includes(word)) {
      currentGuess.map((letter: string, i: number) => {
        let input: HTMLElement | null = document.getElementById(`${i}${index}`);
        let letterElement: HTMLElement | null = document.getElementById(letter);
        if (letter === solution[i]) {
          if (input) input.style.backgroundColor = "green";
          if (letterElement) letterElement.style.backgroundColor = "green";
        } else if (solution.includes(letter)) {
          if (input) input.style.backgroundColor = "yellow";
          if (letterElement) letterElement.style.backgroundColor = "yellow";
        } else {
          if (input) input.style.backgroundColor = "gray";
          if (letterElement) letterElement.style.backgroundColor = "gray";
        }
        let newGuesses: string[] = [...guesses];
        newGuesses[index] = word;
        setGuesses(newGuesses);
        return guesses;
      });
    } else {
      alert("Not a word.");
    }
  };

  return {
    currentGuess,
    setCurrentGuess,
    handleKeyUp,
  };
};

export default useWordInputLogic;
