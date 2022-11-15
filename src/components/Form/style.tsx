import styled from "styled-components";

export const ThemeForm = styled.div`
  min-width: 60%;
  max-width: 60%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > form {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: calc(1vh + 1vw + 0vmin);

    > h1 {
      color: var(--grey-3);
      font-size: calc(1.1vh + 1.1vw + 1vmin);
    }

    & > div:nth-child(2) {
      > p::before {
        content: "R$";
        position: absolute;
        top: calc(2vh + 2vw + 0.1vmin);
        left: calc(0.5vh + 0.5vw + 0.4vmin);
        z-index: 9;

        color: var(--black);
        background-color: transparent;
      }

      > input {
        padding-left: calc(1.8vh + 1.8vw + 0vmin);
      }
    }
  }
`;
