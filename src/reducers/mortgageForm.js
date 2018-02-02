import { mortgageForm as types } from '../actionTypes';

const defaultState = {
  banks: [
    {
      name: 'RBS',
      accountNumber: '1234567',
      balance: '1000.20',
    },
    {
      name: 'Yorkshire Building Society',
      accountNumber: '64376873689',
      balance: '9000.20',
    },
  ],
};

export default function mortgageForm(state = defaultState, action) {
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
