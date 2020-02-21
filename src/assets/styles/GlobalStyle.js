import { createGlobalStyle } from 'styled-components';
import './reset.css';

const GlobalStyle = createGlobalStyle`

:root {
  font-size: 62.5%;
}

body {
  background-color: #F6F6F6;
  font-family: 'Montserrat', 'Helvetica neue', 'Lato', sans-serif;
}

.button {
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 600;
  border: 0;
  cursor: pointer;
  border-radius: 25px;
  padding: 15px 25px;
  width: fit-content;

  > img {
    width: 20px;
    margin-right: 13px;
  }

  &.-dark {
    background-color: #15573F;
    color: #FFF;
  }

}
`;

export default GlobalStyle;
