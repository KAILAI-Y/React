import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from "./style";
import App from './App';
import './style.js';

ReactDOM.render(
    <Fragment>
      <GlobalStyle />
      <App />
    </Fragment>,
    document.getElementById('root')
);

