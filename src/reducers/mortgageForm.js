import { login as loginTypes } from '../actionTypes';

const defaultState = {
  banks: [],
};

export default function mortgageForm(state = defaultState, action) {
  switch (action.type) {
    case loginTypes.AUTO_COMPLETE_FORM: {
      const banks = action.data.map(bank => ({
        name: bank.bank_id,
        accountNumber: bank.number,
        balance: bank.balance.amount,
      }));
      return {
        ...state,
        banks,
      };
    }
    default:
      return { ...state };
  }
}
