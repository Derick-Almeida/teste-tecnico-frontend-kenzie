import styled from "styled-components";

export const Container = styled.main`
  min-width: 60%;
  min-height: 60vh;
  margin: 20vh 20%;

  background: var(--white);
  border-radius: calc(0.5vh + 0.5vw);
  box-shadow: 0px 0px calc(0.3vh + 0.3vw) calc(0.1vh + 0.1vw) var(--blue-1);

  display: flex;
  overflow: hidden;
`;
