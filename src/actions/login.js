import { login as types } from '../actionTypes';

export const updateUsername = value => ({
  type: types.UPDATE_USERNAME,
  value,
});

export const updatePassword = value => ({
  type: types.UPDATE_PASSWORD,
  value,
});

export const autoCompleteForm = data => ({
  type: types.AUTO_COMPLETE_FORM,
  data,
});

export const getDataError = err => ({
  type: types.GET_DATA_ERROR,
  message: err.message,
});

export const getCustomerData = (username, password) => async dispatch => {
  const body = JSON.stringify({ username, password });
  try {
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body,
    });

    dispatch(autoCompleteForm(res));
  } catch (err) {
    dispatch(getDataError(err));
  }
};
