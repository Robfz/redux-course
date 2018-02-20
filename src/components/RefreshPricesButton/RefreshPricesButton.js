import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cryptoPricesActions from '../../actions/cryptoPrices';

const RefreshPricesButton = (props) => {
  const { getCryptoPrices } = props;
  
  return (
    <button onClick={getCryptoPrices}>
      Refresh Prices
    </button>
  );
};

const mapDispatchToProps = (dispatch) => {
  const { getCryptoPrices } = cryptoPricesActions.creators;
  
  return bindActionCreators({
    getCryptoPrices,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(RefreshPricesButton);
