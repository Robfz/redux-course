import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import transactionModalActions from '../../actions/transactionModal';

const AddTransactionButton = ({ showTransactionModal }) =>
  <button onClick={showTransactionModal}>
    Add Transaction
  </button>;

const mapDispatchToProps = (dispatch) => {
  const { showTransactionModal } = transactionModalActions.creators;

  return bindActionCreators({
    showTransactionModal,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(AddTransactionButton);
