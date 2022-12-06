import { GameContainer } from "./components/GameContainer";
import { GameProvider } from "./Contexts/GameProvider";
import GlobalStyle from "./styles/globalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <GameProvider>
        <GameContainer />
      </GameProvider>
    </>
  );
};

export default App;
