import React from "react";

const WordleKeyBoard: React.FC = (): JSX.Element => {
  const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  return (
    <div className="keyboardBase">
      {alphabet.map(
        (letter: string, i: number): JSX.Element => (
          <div key={i} className="key" id={letter}>
            {letter}
          </div>
        )
      )}
    </div>
  );
};

export default WordleKeyBoard;
