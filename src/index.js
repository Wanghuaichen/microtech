import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import App from './App';

ReactDOM.render(

  <HashRouter>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </HashRouter>

  , document.getElementById('root'));
