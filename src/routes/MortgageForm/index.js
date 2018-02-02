import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import PropTypes from 'prop-types';
import style from './style.css';

function MortageForm(props) {
  const banks = props.banks.map((bank, index) =>
    <div
      className={style.bankContainer}
      key={`${bank.name}_${bank.accountNumber}`}
    >
      <div className={style.textField}>
        <TextField
          id={`bank_${bank.name}`}
          floatingLabelText={`Bank ${index + 1}`}
          value={bank.name}
        />
      </div>
      <div className={style.textField}>
        <TextField
          id={`account_${bank.accountNumber}`}
          floatingLabelText="Account #"
          value={bank.accountNumber}
        />
      </div>
      <div className={style.textField}>
        <TextField
          id={`balance_${bank.accountNumber}`}
          floatingLabelText="Balance £"
          value={bank.balance}
        />
      </div>
    </div>,
  );

  const loader = (
    <div className={style.loader}>
      <span className={`${style.dot} ${style.dot_1}`} />
      <span className={`${style.dot}  ${style.dot_2}`} />
      <span className={`${style.dot}  ${style.dot_3}`} />
      <span className={`${style.dot}  ${style.dot_4}`} />
    </div>
  );

  return (
    <div>
      <div className={style.container}>
        {props.loading ? loader : null}
        {props.banks.length > 1
          ? <div>
              <Subheader>Your bank accounts</Subheader>
              {banks}
            </div>
          : null}
        {props.error
          ? <Subheader>
              {props.error}
            </Subheader>
          : null}
      </div>
    </div>
  );
}

MortageForm.propTypes = {
  banks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

MortageForm.defaultProps = {
  error: null,
};

const mapStateToProps = state => ({
  banks: state.mortgageForm.banks,
  error: state.mortgageForm.error,
  loading: state.mortgageForm.loading,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MortageForm);
