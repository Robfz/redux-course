import React from 'react';
import { connect } from 'react-redux';
import values from 'ramda/src/values';
import AddTransactionButton from '../AddTransactionButton';
import RefreshPricesButton from '../RefreshPricesButton';
import Transaction from '../Transaction';
import PortfolioIndicatorsBar from '../PortfolioIndicatorsBar';
import {
  AddTransactionButtonContainerStyled,
  TransactionsListContainerStyled,
} from './TransactionsList.styled';
import transactionsActions from '../../actions/transactions';

import store from '../../store';

const TransactionsList = (props) => {
  const removeTransaction = (payload) => {
    const { removeTransaction } = transactionsActions.creators;

    store.dispatch(removeTransaction(payload));
  }

  const { cryptoPrices } = props;

  const transactions = values(props.transactions).map((transaction) =>
    <Transaction
      key={transaction.id}
      cryptoPrice={cryptoPrices[transaction.crypto]}
      transaction={transaction}
      removeTransaction={removeTransaction}
    />
  );

  return (
    <div>
      <AddTransactionButtonContainerStyled>
        <AddTransactionButton />
        <RefreshPricesButton />
      </AddTransactionButtonContainerStyled>
      <PortfolioIndicatorsBar />
      <TransactionsListContainerStyled>
        { transactions }
      </TransactionsListContainerStyled>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    cryptoPrices,
    transactions,
  } = state;
  
  return {
    cryptoPrices,
    transactions,
  };
};

export default connect(mapStateToProps)(TransactionsList);
