export interface Props {
  index: number;
  setGuesses: React.Dispatch<React.SetStateAction<string[]>>;
  guesses: string[];
  solution: string;
  usableWords: string[];
}
