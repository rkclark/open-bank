import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Login from '../Login';

export default function Home() {
  return (
    <div>
      <MuiThemeProvider>
        <Login />
      </MuiThemeProvider>
    </div>
  );
}
