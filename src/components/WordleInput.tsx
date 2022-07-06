import React from "react";
import { Props } from "src/utils/types";
import useWordInputLogic from "src/utils/useWordInputLogic";

const WordleInput: React.FC<Props> = ({
  index,
  setGuesses,
  guesses,
  solution,
  usableWords,
}: Props): JSX.Element => {
  const { currentGuess, setCurrentGuess, handleKeyUp } = useWordInputLogic({
    solution,
    guesses,
    setGuesses,
    usableWords,
    index,
  });
  return (
    <div>
      {currentGuess.map((letter: string, i: number) => (
        <input
          type="text"
          key={i}
          id={`${i}${index}`}
          value={currentGuess[i]}
          onChange={({
            target: { value },
          }: React.ChangeEvent<HTMLInputElement>): void => {
            let newCurrentGuess: string[] = currentGuess;
            newCurrentGuess[i] = value;
            setCurrentGuess(newCurrentGuess);
          }}
          onKeyUp={(e: React.KeyboardEvent) => handleKeyUp(e, i)}
          maxLength={1}
          minLength={1}
          required
        />
      ))}
    </div>
  );
};

export default WordleInput;
