import { useGame } from "../../Contexts/GameProvider";
import { Board } from "../Board/style";
import { Cell } from "../Cell";
import { EndGameContainer } from "../EndGameContainer";
import { StyledGameContainer } from "./style";

export const GameContainer: React.FC = () => {
  const {
    isEndGame: { isEndGame },
  } = useGame();

  return (
    <StyledGameContainer>
      <Board>
        <Cell numCell={0} />
        <Cell numCell={1} />
        <Cell numCell={2} />
        <Cell numCell={3} />
        <Cell numCell={4} />
        <Cell numCell={5} />
        <Cell numCell={6} />
        <Cell numCell={7} />
        <Cell numCell={8} />
      </Board>
      {isEndGame && <EndGameContainer />}
    </StyledGameContainer>
  );
};
