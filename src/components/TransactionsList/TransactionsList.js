import React, { Component } from 'react';
import values from 'ramda/src/values';
import AddTransactionButton from '../AddTransactionButton';
import RefreshPricesButton from '../RefreshPricesButton';
import Transaction from '../Transaction';
import PortfolioIndicatorsBar from '../PortfolioIndicatorsBar';
import {
  AddTransactionButtonContainerStyled,
  TransactionsListContainerStyled,
} from './TransactionsList.styled';
import transactions from '../../actions/transactions';

import store from '../../store';

class TransactionsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: {},
      cryptoPrices: {},
    };
  }

  removeTransaction = (payload) => {
    const { removeTransaction } = transactions.creators;

    store.dispatch(removeTransaction(payload));
  }

  render() {
    const { cryptoPrices } = this.state;

    const transactions = values(this.state.transactions).map((transaction) =>
      <Transaction
        key={transaction.id}
        cryptoPrice={cryptoPrices[transaction.crypto]}
        transaction={transaction}
        removeTransaction={this.removeTransaction}
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
  }
}

export default TransactionsList;
