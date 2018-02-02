import React from 'react';
import { connect } from 'react-redux';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import { updateUsername, updatePassword } from '../../actions/login';
import style from './style.css';

function Login(props) {
  return (
    <div>
      <div className={style.container}>
        <Subheader>
          Sign in with Open Banking to auto-complete your mortgage application.
        </Subheader>
        <div className={style.textField}>
          <TextField
            id="username"
            floatingLabelText="User name"
            value={props.username}
            onChange={event => props.updateUsername(event.target.value)}
          />
        </div>
        <div className={style.textField}>
          <TextField
            id="password"
            type="password"
            floatingLabelText="Password"
            value={props.password}
            onChange={event => props.updatePassword(event.target.value)}
          />
        </div>
        <div className={style.textField}>
          <RaisedButton label="Login" primary />
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  updateUsername: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  username: state.login.username,
  password: state.login.password,
});

const mapDispatchToProps = dispatch => ({
  updateUsername: value => dispatch(updateUsername(value)),
  updatePassword: value => dispatch(updatePassword(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
