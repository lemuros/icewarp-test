import { createGlobalStyle } from "styled-components";

export const AppGlobalStyles = createGlobalStyle`
  :root{
    --color-primary: rebeccapurple;
    --color-gray-1: #eee;
    --color-gray-2: #ddd;
    --color-gray-3: #666;
    --color-gray-4: #333;
    --color-gray-5: #222;
    --color-backdrop-1: #66339914;
    --color-backdrop-2: #66339947;

    --min-width: 400px;
  }

::-webkit-scrollbar {
    width: 8px;
    border: 2px solid white;
  }

::-webkit-scrollbar-thumb {
    width: 8px;
    border: 2px solid white;
    borderRadius: 100px;
    background: var(--color-gray-3);
    minHeight: 50px;
  }

  head, html, body, #root {
    min-height: 100vh;
  }

  body {
    font-family: 'Open Sans Variable', sans-serif;
    background: var(--color-gray-1);
    color: var(--color-gray-5);
    line-height: 1.5rem;
  }

  body.dialog-open{
    overflow: hidden;
  }

  p{
    margin: 0;
  }
`;
