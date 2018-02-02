import { login as types } from '../actionTypes';

export const updateUsername = value => ({
  type: types.UPDATE_USERNAME,
  value,
});

export const updatePassword = value => ({
  type: types.UPDATE_PASSWORD,
  value,
});
