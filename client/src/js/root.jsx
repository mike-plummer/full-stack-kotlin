import React from 'react';
import ReactDOM from 'react-dom';
import '../../build/node_modules/semantic-ui-css/semantic.min.css';

import CharactersList from './components/characters/characters.list';

// ========================================

const body = document.body;
const root = document.createElement('DIV');
body.appendChild(root);
root.id = 'root';

ReactDOM.render(
  <CharactersList />,
  root
);