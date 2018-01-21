import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './App';

const muiTheme = getMuiTheme({
  palette: {
    canvasColor: '#1A2E5A',
    textColor: '#FFFFFF',
  },
  fontFamily: 'Open Sans'
});

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

ReactDOM.render(

  <BrowserRouter>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Route component={ScrollToTop}/> 
        <App />
    </MuiThemeProvider>
  </BrowserRouter>

  , document.getElementById('root'));
