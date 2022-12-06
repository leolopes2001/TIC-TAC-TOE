import styled from "styled-components";


export const Board = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  align-items: center;
  align-content: center;

  .cell:nth-child(1),
  .cell:nth-child(2),
  .cell:nth-child(3) {
    border-top: none;
  }

  .cell:nth-child(3),
  .cell:nth-child(6),
  .cell:nth-child(9) {
    border-right: none;
  }

  .cell:nth-child(1),
  .cell:nth-child(4),
  .cell:nth-child(7) {
    border-left: none;
  }

  .cell:nth-child(7),
  .cell:nth-child(8),
  .cell:nth-child(9) {
    border-bottom: none;
  }
`;

