import React from 'react';
import AppBar from 'material-ui/AppBar';
import Login from '../Login';
import MortgageForm from '../MortgageForm';

export default function App() {
  return (
    <div>
      <AppBar title="Your Mortgage Application" />
      <Login />
      <MortgageForm />
    </div>
  );
}
