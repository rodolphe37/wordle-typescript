import React from "react";
import useBoardLogic from "src/utils/useBoardLogic";
import WordleInput from "./WordleInput";
import WordleKeyBoard from "./WordleKeyBoard";

const WordleBoard: React.FC = (): JSX.Element => {
  const { solution, guesses, setGuesses, usableWords } = useBoardLogic();

  return (
    <div className="board-container">
      <span style={{ color: "white" }}>{solution}</span>
      {guesses.map(
        (guess: string, i: number): JSX.Element => (
          <WordleInput
            key={i}
            index={i}
            setGuesses={setGuesses}
            guesses={guesses}
            solution={solution}
            usableWords={usableWords}
          />
        )
      )}
      <WordleKeyBoard />
    </div>
  );
};

export default WordleBoard;
