import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import transactions from '../actions/transactions';

const Transaction = (props) => {
  const {
    removeTransaction,
    transaction,
  } = props;

  const handleDeleteButtonClick = () =>
    removeTransaction({ transaction });

  return (
    <div>
      <div>{transaction.id}</div>
      <div>Transaction type: {transaction.type}</div>
      <div>Transaction amount: {transaction.amount}</div>
      <div>Cryptocurrency: {transaction.crypto}</div>
      <button onClick={handleDeleteButtonClick}>
        Delete
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  const { removeTransaction } = transactions.creators;

  return bindActionCreators({
    removeTransaction,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Transaction);
