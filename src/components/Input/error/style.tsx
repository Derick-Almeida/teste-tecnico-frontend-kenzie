import styled, { keyframes } from "styled-components";

const showError = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: calc(2vh + 2vw + 1vmin);
  z-index: 9;

  background: var(--grey-1);
  padding: calc(0.4vh + 0.4vw);
  border-radius: calc(0.5vh + 0.5vw);
  filter: drop-shadow(calc(0.1vh + 0.1vw) calc(0.1vh + 0.1vw) calc(0.3vh + 0.3vw) var(--grey-3));

  display: flex;
  align-items: center;
  gap: calc(0.5vh + 0.5vw);

  animation: ${showError} 2.5s linear forwards;
  transition: opacity 1s;

  &::before {
    content: "";
    position: absolute;
    top: calc(-0.5vh + -0.5vw);
    left: calc(0.3vh + 0.3vw);

    width: 0;
    height: 0;
    border-left: calc(0.6vh + 0.6vw) solid transparent;
    border-right: calc(0.6vh + 0.6vw) solid transparent;
    border-bottom: calc(0.8vh + 0.8vw) solid var(--grey-1);
  }

  > span {
    font-size: calc(1.1vh + 1.1vw);
    font-weight: 900;
    font-family: monospace, sans-serif;

    background: var(--blue-2);
    color: var(--grey-1);
    border-radius: calc(0.2vh + 0.2vw);

    min-width: calc(0.8vh + 1.8vw);
    text-align: center;
  }

  > p {
    font-size: calc(0.6vh + 0.7vw);
    min-width: calc(6.2vh + 6.2vw);
    max-width: calc(10.2vh + 10.2vw);
  }
`;
