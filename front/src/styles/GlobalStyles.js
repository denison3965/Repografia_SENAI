import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }
  *, button, input {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }
  :root {
    --color-azul: #095B8A;
    --color-vermelho: #c11b04;
    --color-cinzaEscuro: #626262;
    --color-cinzaClaro: #DDDDDD;
    --color-cinzaMaisClaro: #DEE3E6;
    --color-branco: #FFFFFF;
    --color-azulMaisClaro: #D0E7EE;
    --color-preto: #000;
  }
`;