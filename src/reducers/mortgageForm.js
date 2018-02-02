import { login as loginTypes } from '../actionTypes';

const defaultState = {
  banks: [],
  loading: false,
  error: null,
};

export default function mortgageForm(state = defaultState, action) {
  switch (action.type) {
    case loginTypes.AUTO_COMPLETE_FORM: {
      const banks = action.data.map(bank => ({
        name: bank.bank.full_name,
        accountNumber: bank.number,
        balance: bank.balance.amount,
      }));
      return {
        ...state,
        banks,
        loading: false,
      };
    }
    case loginTypes.LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case loginTypes.GET_DATA_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    }
    default:
      return { ...state };
  }
}
