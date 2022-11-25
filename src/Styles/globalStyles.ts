import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Source Code Pro', monospace;
  src: url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&display=swap');
}


*{
  height: 100%;

}

body {
  margin: 0;
  padding: 0;
  background: #020202;
  font-family: 'Source Code Pro', monospace;

  ::-webkit-scrollbar {
  width: 07px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #632038;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
  }
  }

`;
