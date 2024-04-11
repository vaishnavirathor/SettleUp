import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { GlobalStyle } from './styles/GlobalStyle';
import { GlobalProvider } from './context/globalContext';

// Import the FontAwesome CSS file
// import '@fontsource/fontawesome-free/css/all.min.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <GlobalProvider/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
