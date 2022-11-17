import styled from "styled-components";

export const ThemeList = styled.div`
  min-width: 40%;
  max-width: 40%;
  background-color: var(--grey-1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
    color: var(--blue-4);
    margin-bottom: calc(1.5vh + 1.5vw + 0vmin);
    position: relative;

    font-size: calc(0.9vh + 0.9vw + 0.5vmin);
    font-style: italic;
    font-weight: 800;

    &::before {
      content: "";
      position: absolute;
      bottom: calc(-0.4vh + -0.4vw + 0vmin);

      width: 100%;
      height: calc(0.1vh + 0.1vw + 0vmin);

      background-color: var(--blue-2);
      box-shadow: 0 0 calc(1vh + 1vw);
      filter: blur(calc(0.2vh + 0.2vw));
    }
  }

  > ul {
    display: flex;
    flex-direction: column;
    gap: calc(1.5vh + 1.5vw + 0vmin);

    > li {
      color: var(--blue-2);
      font-size: calc(0.8vh + 0.8vw + 0.5vmin);
      font-style: italic;
      font-weight: 400;

      > span {
        color: var(--blue-3);
        font-weight: 600;
      }
    }
  }
`;
