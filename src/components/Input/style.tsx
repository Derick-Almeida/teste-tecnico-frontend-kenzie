import styled from "styled-components";

export const ThemeInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(0.5vh + 0.5vw + 0vmin);
  position: relative;

  > p {
    color: var(--grey-3);
    font-size: calc(0.7vh + 0.8vw + 0vmin);
  }

  > input {
    background: var(--grey-1);
    border: 1px solid var(--grey-2);
    border-radius: 5px;
    height: calc(4vh + 1vw + 0vmin);

    padding: calc(0.5vh + 1vw + 0vmin);
    font-size: calc(0.8vh + 0.8vw + 0.2vmin);
    color: var(--black);
    position: relative;

    &:focus {
      border: 1px solid var(--blue-2);
      background: var(--white);
      outline: 1px solid var(--blue-3);
    }
    &::placeholder {
      color: var(--grey-2);
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  > span {
    color: var(--grey-2);
    font-size: calc(0.6vh + 0.6vw + 0vmin);
  }
`;
