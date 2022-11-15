import styled from "styled-components";

export const ThemeList = styled.div`
  > h2 {
    color: var(--blue-4);
    margin-bottom: 2rem;
    font-size: calc(0.9vh + 0.9vw + 0.5vmin);
    font-style: italic;
    font-weight: 800;
  }

  > ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;

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
