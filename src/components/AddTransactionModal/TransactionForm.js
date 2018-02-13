import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import transactionsActions from '../../actions/transactions';
import transactionModalActions from '../../actions/transactionModal';

const BUY_OPTION = 'buy';
const SELL_OPTION = 'sell';

const SUPPORTED_CRYPTOS = [
  {
    name: 'Bitcoin',
    ticker: 'BTC',
  },
  {
    name: 'Ethereum',
    ticker: 'ETH',
  },
  {
    name: 'Litecoin',
    ticker: 'LTC',
  },
  {
    name: 'Ripple',
    ticker: 'XRP',
  },
];

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
      <form onSubmit={this.handleSubmit}>
        Cryptocurrency <CryptoSelector value={txnCrypto} onChange={this.setTxnCrypto}/>
        Amount <input type="text" onChange={this.setTxnAmount} />
        Price <input type="text" onChange={this.setTxnPrice} />
        <div>
          Buy
          <input
            type="radio"
            checked={this.isOptionChecked(BUY_OPTION)}
            onChange={() => this.setTxnType(BUY_OPTION)}
          />
          Sell
          <input
            type="radio"
            checked={this.isOptionChecked(SELL_OPTION)}
            onChange={() => this.setTxnType(SELL_OPTION)}
          />
        </div>
        <input type="submit" value="Save" />
      </form>
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
