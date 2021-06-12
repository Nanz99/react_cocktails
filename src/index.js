import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CocktailsProvider } from './context';



ReactDOM.render(
  <CocktailsProvider>
    <App />
  </CocktailsProvider>
  , document.getElementById('root')
);
