import React from 'react';
import ReactDOM from 'react-dom';
import '../../build/node_modules/semantic-ui-css/semantic.min.css';

import Dashboard from './components/Dashboard';

// ========================================

const body = document.body;
const root = document.createElement('DIV');
body.appendChild(root);
root.id = 'root';

ReactDOM.render(
  <Dashboard />,
  root
);