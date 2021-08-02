import React from 'react';
import { MuiThemeProvider as ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import App from './App';

const Body = () => (
  <div>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </div>
);

export default Body;
