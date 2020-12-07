import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
		background: #010101;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
		font: 10px "Roboto Mono", sans-serif;
		color: var(--primary);
  }
  #root {
		--primary: #D7DADC;
		--off-text: #707273;
		--lighter-bg: #1A1A1C;
		--light-bg: #27272A;
		--bg: #010101;
		--red: #F23005;
  }
  button, img, svg {
		cursor: pointer;
		outline: none;
  }
`;
