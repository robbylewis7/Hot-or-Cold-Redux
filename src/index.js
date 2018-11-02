import React from 'react';
import ReactDOM from 'react-dom';
import {provider} from 'react-redux';

import store from './store';

import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
