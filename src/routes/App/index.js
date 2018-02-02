import React from 'react';
import AppBar from 'material-ui/AppBar';
import Login from '../Login';

export default function App() {
  return (
    <div>
      <AppBar title="Your Mortgage Application" />
      <Login />
    </div>
  );
}
