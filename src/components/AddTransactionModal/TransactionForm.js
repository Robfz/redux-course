import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import transactionsActions from '../../actions/transactions';
import transactionModalActions from '../../actions/transactionModal';
import {
  InputContainerStyled,
  RadioButtonStyled,
  TransactionFormStyled,
} from './TransactionForm.styled';
import { SUPPORTED_CRYPTOS } from '../../constants/cryptos';

const BUY_OPTION = 'buy';
const SELL_OPTION = 'sell';

const getRandomId = () => Math.floor(Math.random() * 0x1000000).toString(16);

const CryptoSelector = ({ onChange, value }) => {
  const options =
    SUPPORTED_CRYPTOS.map(({ ticker }) => <option value={ticker} key={ticker}>{ticker}</option>);
  
  return (
    <select value={value} onChange={onChange}>
      { options }
    </select>
  );
};

class TransactionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      txnCrypto: 'ETH',
      txnType: BUY_OPTION,
      txnAmount: 0,
    };
  }
  
  handleSubmit = (event) => {
    event.preventDefault();

    const {
      addTransaction,
      hideTransactionModal,
    } = this.props;

    const transaction = {
      id: getRandomId(),
      crypto: this.state.txnCrypto,
      type: this.state.txnType,
      amount: this.state.txnAmount,
      price: this.state.txnPrice,
      date: new Date(),
    };

    addTransaction({ transaction });
    hideTransactionModal();
  }

  isOptionChecked = (option) => {
    const { txnType } = this.state;
    
    return option === txnType;
  }

  setTxnCrypto = (event) => {
    const { value } = event.target;

    this.setState({ txnCrypto: value });
  }

  setTxnType = (option) => {
    this.setState({ txnType: option });
  }

  setTxnAmount = (event) => {
    const { value } = event.target;
    
    this.setState({ txnAmount: parseFloat(value, 10) });
  }

  setTxnPrice = (event) => {
    const { value } = event.target;

    this.setState({ txnPrice: parseFloat(value, 10) });
  }

  render() {
    const { txnCrypto } = this.state;

    return (
      <TransactionFormStyled onSubmit={this.handleSubmit}>
        <InputContainerStyled>
          Cryptocurrency <CryptoSelector value={txnCrypto} onChange={this.setTxnCrypto}/>
        </InputContainerStyled>
        <InputContainerStyled>
          Amount <input type="text" onChange={this.setTxnAmount} />
        </InputContainerStyled>
        <InputContainerStyled>
          Price <input type="text" onChange={this.setTxnPrice} />
        </InputContainerStyled>
        <InputContainerStyled>
          Buy
          <RadioButtonStyled
            type="radio"
            checked={this.isOptionChecked(BUY_OPTION)}
            onChange={() => this.setTxnType(BUY_OPTION)}
          />
          Sell
          <RadioButtonStyled
            type="radio"
            checked={this.isOptionChecked(SELL_OPTION)}
            onChange={() => this.setTxnType(SELL_OPTION)}
          />
        </InputContainerStyled>
        <input type="submit" value="Save" />
      </TransactionFormStyled>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const { addTransaction } = transactionsActions.creators;
  const { hideTransactionModal } = transactionModalActions.creators;

  return bindActionCreators({
    addTransaction,
    hideTransactionModal,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(TransactionForm);
