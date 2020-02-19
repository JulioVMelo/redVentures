import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import GlobalStyle from './assets/styles/GlobalStyle';
import Home from './screens/Home';

ReactDOM.render(
  <>
    <GlobalStyle />
    {/* <App /> */}
    <Home />
  </>,
  document.getElementById('root')
);
