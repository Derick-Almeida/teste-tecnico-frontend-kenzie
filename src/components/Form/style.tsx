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

    > button {
      width: 0;
      height: 0;
      padding: 0;
      margin: 0;
      border: none;
    }
  }
`;
