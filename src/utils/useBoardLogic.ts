import { useEffect, useState } from "react";
import data from "src/datas";
import useCurrentWord from "./useCurrentWord";

const useBoardLogic = () => {
  const [guesses, setGuesses] = useState<string[]>([...Array(6)]);
  const { current } = useCurrentWord();
  const [solution, setSolution] = useState<string>("");
  const [usableWords, setUsableWords] = useState<string[]>([]);

  useEffect((): void => {
    if (current !== undefined && solution === "") {
      setUsableWords(data);
      setSolution(current);
    }
    console.log("solution Word:", solution);
  }, [current, solution]);

  useEffect((): void => {
    let hasWon: boolean =
      guesses.filter((guess: string): boolean => guess === solution).length > 0
        ? true
        : false;
    let realGuesses: string[] = guesses.filter(
      (guess: string): string => guess && guess
    );
    if (hasWon) {
      // window.location.reload();
    } else if (realGuesses.length >= 6) {
      alert("Loser.");
      window.location.reload();
    }
  }, [solution, guesses]);
  return {
    solution,
    guesses,
    setGuesses,
    usableWords,
  };
};

export default useBoardLogic;
