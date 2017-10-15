import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import { Dashboard } from './components/Dashboard';
import { reducer } from './reducer';

// ========================================

const store = createStore(reducer);

const body = document.body;
const root = document.createElement('DIV');
body.appendChild(root);
root.id = 'root';

ReactDOM.render(
  <Dashboard store = { store } />,
  root
);