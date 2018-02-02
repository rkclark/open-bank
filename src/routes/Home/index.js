import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from '../App';

export default function Home() {
  return (
    <div>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </div>
  );
}
