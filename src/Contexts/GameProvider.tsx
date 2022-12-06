import { createContext, ReactNode, useContext, useState } from "react";
import { useUppdateEffect } from "../Hooks/useUpdateEffect";

interface iEndGame {
  winner: "O" | "X" | "Empate" | null;
  isEndGame: boolean;
}

interface iGameContext {
  squares: Array<"O" | "X" | null>;
  handleClick: (position: number) => void;
  isCircle: boolean;
  isEndGame: iEndGame;
  restartGame: () => void;
}

const GameContext = createContext<iGameContext>({} as iGameContext);

export interface iDefaultContextProps {
  children: ReactNode;
}

const vitoryCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const GameProvider = ({ children }: iDefaultContextProps) => {
  const [squares, setSquares] = useState<Array<"O" | "X" | null>>(
    Array(9).fill(null)
  );
  const [isCircle, setIsCircle] = useState(false);
  const [isEndGame, setIsEndGame] = useState<iEndGame>({
    winner: null,
    isEndGame: false,
  });

  const restartGame = (): void => {
    setSquares(Array(9).fill(null));
    setIsCircle(false);
    setIsEndGame({ winner: null, isEndGame: false });
  };

  const checkVitory = (currentPlayer: "X" | "O"): boolean => {
    return vitoryCombinations.some((combination) => {
      return combination.every((position) => {
        return squares[position] === currentPlayer;
      });
    });
  };

  const handleClick = (position: number): void => {
    if (squares[position]) return;

    const currentPlayer = isCircle ? "O" : "X";

    setSquares((oldSquares: any) => {
      oldSquares[position] = currentPlayer;
      return [...oldSquares];
    });
  };

  const verifyDraw = () => squares.every((el) => el !== null);

  useUppdateEffect(() => {
    if (squares.every((el) => el === null)) return;

    const currentPlayer = isCircle ? "O" : "X";

    const isWin = checkVitory(currentPlayer);

    if (isWin) {
      setIsEndGame({ winner: currentPlayer, isEndGame: true });
    } else if (verifyDraw()) {
      setIsEndGame({ winner: "Empate", isEndGame: true });
    } else {
      setIsCircle((oldCircleValue) => !oldCircleValue);
    }
  }, [squares]);

  return (
    <GameContext.Provider
      value={{ squares, handleClick, isCircle, isEndGame, restartGame }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGame = () => useContext(GameContext);

export { GameProvider, useGame };
