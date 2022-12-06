import styled from "styled-components";

export const StyledEndGameContainer = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.8);
  gap: 1rem;

  h4 {
    font-size: 3rem;
    color: #ffff;
  }

  button {
    font-size: 2.5rem;
    background-color: rgba(65, 185, 131, 1);
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    margin-top: 15px;
    color: white;
    cursor: pointer;
    transition: all 300ms;
  }

  button:hover {
    color: rgba(65, 185, 131, 1);
    background-color: white;
  }
`;
