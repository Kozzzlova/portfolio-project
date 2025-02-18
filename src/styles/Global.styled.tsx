import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Theme } from './Theme';

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*::selection {
     background-color: ${Theme.colors.darkBg};
    color: ${Theme.colors.lightText};
}
    body {
  margin: 0;
  line-height: 1.2;
   background-color: ${Theme.colors.lightMain};
  font-family: Epilogue,  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 16px;

  /* min-width: 375px; */

/*   
  ::-webkit-scrollbar {
  width: 0;
} */
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    font-family: inherit;
}

ul {
    list-style: none;
}

button {
    background-color: unset;
    border: none;
}


section:nth-of-type(even){
    background-color: ${Theme.colors.darkBg};
    color: ${Theme.colors.lightText};

    *::selection {
        background-color: ${Theme.colors.lightBg};
         color: ${Theme.colors.darkBg};
    }
}


`;
