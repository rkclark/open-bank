import React from 'react';
import AppBar from 'material-ui/AppBar';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import style from './style.css';

export default function Login() {
  return (
    <div>
      <AppBar title="Your Mortgage Application" />
      <div className={style.container}>
        <Subheader>
          Sign in with Open Banking to auto-complete your mortgage application.
        </Subheader>
        <div className={style.textField}>
          <TextField id="username" floatingLabelText="User name" />
        </div>
        <div className={style.textField}>
          <TextField
            id="password"
            type="password"
            floatingLabelText="Password"
          />
        </div>
        <div className={style.textField}>
          <RaisedButton label="Login" primary />
        </div>
      </div>
    </div>
  );
}
