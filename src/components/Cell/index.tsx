import { useGame } from "../../Contexts/GameProvider";
import { StyledCell } from "./style";

interface iCell {
  numCell: number;
}

export const Cell = ({ numCell }: iCell) => {
  const { handleClick, squares, isCircle } = useGame();

  const value = squares[numCell];

  return (
    <StyledCell
      className="cell"
      currentValue={value}
      onClick={() => handleClick(numCell)}
      isCircle={isCircle}
    />
  );
};
