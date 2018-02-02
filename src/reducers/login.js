import { login as types } from '../actionTypes';

const defaultState = {
  username: '',
  password: '',
};

export default function login(state = defaultState, action) {
  switch (action.type) {
    case types.UPDATE_USERNAME:
      return {
        ...state,
        username: action.value,
      };
    case types.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.value,
      };
    default:
      return { ...state };
  }
}
