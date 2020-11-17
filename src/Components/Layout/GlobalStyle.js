import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }

  :root {
    --color0: #1f1f1f;
    --color1: #fdfdfd;
    --color2: #e0e0e0;
    --color3: #f3d57b;
    --color4: #cc5e3c;
    --color5: #403268;
    background-color: var(--color2);
  }

  ::-webkit-scrollbar {
    width: 7px;
    background: var(--color2);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color5);
  }
`;

export default GlobalStyle;
