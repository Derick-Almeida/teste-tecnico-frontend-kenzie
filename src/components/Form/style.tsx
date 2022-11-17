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
    padding: calc(0.5vh + 0.5vw);

    > h1 {
      color: var(--grey-3);
      font-size: calc(1.1vh + 1.1vw + 1vmin);
    }

    > button {
      padding: calc(0.5vh + 0.5vw);
      margin-top: calc(0.5vh + 0.5vw);

      border: solid calc(0.1vh + 0.1vw) var(--blue-1);
      border-radius: calc(0.2vh + 0.2vw);
      background: var(--white);

      font-size: calc(0.7vh + 0.7vw + 0.4vmin);
      color: var(--blue-4);
      transition: background 0.4s, color 0.3s, border 0.3s;

      &:hover {
        background: var(--blue-3);
        color: var(--white);
        border: solid calc(0.1vh + 0.1vw) var(--grey-2);
      }
    }
  }
`;
