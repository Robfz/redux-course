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

const transactionsSelector = (state) => state.transactions;
const cryptoPricesSelector = (state) => state.cryptoPrices;

class TransactionsList extends Component {
  constructor(props) {
    super(props);

    this.reduxUnsubscribe = null;

    this.state = {
      transactions: {},
      cryptoPrices: {},
    };
  }

  handleChangeInStore = () => {
    const transactions = transactionsSelector(store.getState());
    const cryptoPrices = cryptoPricesSelector(store.getState());
    
    this.setState({
      cryptoPrices,
      transactions,
    });
  }

  removeTransaction = (payload) => {
    const { removeTransaction } = transactions.creators;

    store.dispatch(removeTransaction(payload));
  }

  componentDidMount() {
    this.reduxUnsubscribe = store.subscribe(this.handleChangeInStore);
  }

  componentWillUnmount() {
    this.reduxSubscription();
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
