import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};


ReactDOM.render(

  <BrowserRouter>
    <MuiThemeProvider>
      <Route component={ScrollToTop}/> 
        <App />
    </MuiThemeProvider>
  </BrowserRouter>

  , document.getElementById('root'));
