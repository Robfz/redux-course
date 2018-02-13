import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import transactions from '../../actions/transactions';
import {
  CryptoLogoStyled,
  TransactionContainerStyled,
} from './Transaction.styled';
import xrpLogo from '../../res/xrp.png';

const Transaction = (props) => {
  const {
    removeTransaction,
    transaction,
  } = props;

  const handleDeleteButtonClick = () =>
    removeTransaction({ transaction });

  return (
    <TransactionContainerStyled>
      <CryptoLogoStyled src={xrpLogo} />
      <div>{transaction.id}</div>
      <div>Transaction type: {transaction.type}</div>
      <div>Transaction amount: {transaction.amount}</div>
      <div>Cryptocurrency: {transaction.crypto}</div>
      <button onClick={handleDeleteButtonClick}>
        Delete
      </button>
    </TransactionContainerStyled>
  );
};

const mapDispatchToProps = (dispatch) => {
  const { removeTransaction } = transactions.creators;

  return bindActionCreators({
    removeTransaction,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Transaction);
