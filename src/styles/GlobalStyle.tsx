import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --white: #FFFFFF;
    --black: #000000;
    --grey-1: #F7F9FB;
    --grey-2: #A4A9AD;
    --grey-3: #666666;
    --blue-1: #D1DCE6;
    --blue-2: #A1C3ED;
    --blue-3: #6AA0E3;
    --blue-4: #4178BC;
  }
  body{
    background: var(--grey-1);
    font-family: 'Merriweather Sans', sans-serif;
  }
  ul,ol,li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  button {
    outline: none;
    cursor: pointer;
  }
`;
