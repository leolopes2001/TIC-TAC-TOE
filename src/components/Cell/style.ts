import styled, { css } from "styled-components";

interface iStyledCell {
  currentValue: "O" | "X" | null;
  isCircle: boolean;
}

export const StyledCell = styled.div<iStyledCell>`
  width: 100px;
  height: 100px;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ currentValue, isCircle }) => {
    switch (currentValue) {
      case "X":
        return css`
          cursor: not-allowed;
          &::after,
          &::before {
            content: "";
            width: calc(100px * 0.9);
            height: calc(100px * 0.15);
            position: absolute;
            background-color: white;
          }

          &::after {
            transform: rotate(45deg);
          }

          &::before {
            transform: rotate(-45deg);
          }
        `;
      case "O":
        return css`
          cursor: not-allowed;
          &::before {
            content: "";
            width: calc(100px * 0.9);
            height: calc(100px * 0.9);
            position: absolute;
            background-color: white;
            border-radius: 50%;
          }
        `;
      case null:
        if (isCircle) {
          return css`
            &:hover::before {
              content: "";
              width: calc(100px * 0.9);
              height: calc(100px * 0.9);
              position: absolute;
              background-color: rgba(255, 255, 255, 0.3);
              border-radius: 50%;
            }
          `;
        } else {
          return css`
            &:hover::after,
            &:hover::before {
              content: "";
              width: calc(100px * 0.9);
              height: calc(100px * 0.15);
              position: absolute;
              background-color: rgba(255, 255, 255, 0.3);
            }

            &:hover::after {
              transform: rotate(45deg);
            }

            &:hover::before {
              transform: rotate(-45deg);
            }
          `;
        }
    }
  }}
`;
