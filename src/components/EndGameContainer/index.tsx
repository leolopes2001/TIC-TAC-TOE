import { useGame } from "../../Contexts/GameProvider";
import { StyledEndGameContainer } from "./style";

export const EndGameContainer = () => {
  const {
    restartGame,
    isEndGame: { winner },
  } = useGame();

  const EndGameText = winner === "Empate" ? "Empate!" : `${winner} Ganhou!`;
  return (
    <StyledEndGameContainer>
      <h4>{EndGameText}</h4>
      <button onClick={restartGame}>Reiniciar</button>
    </StyledEndGameContainer>
  );
};
