import keys from 'ramda/src/keys';
import cryptoPricesActions from '../actions/cryptoPrices';

const initialState = {
  btc: 8500,
  eth: 860,
  ltc: 155,
  xrp: .98,
};

const cryptoPricesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case cryptoPricesActions.types.CRYPTO_PRICES_FETCHED: {
      const { prices } = payload;

      const newState = { ...prices };

      keys(newState).forEach((crypto) => newState[crypto] = parseFloat(newState[crypto]));

      return newState;
    }

    default:
      return state;
  }
};

export default cryptoPricesReducer;
