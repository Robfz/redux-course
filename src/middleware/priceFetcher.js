import axios from 'axios';
import cryptoPricesActions from '../actions/cryptoPrices';

const { CRYPTO_PRICES_GET } = cryptoPricesActions.types;
const { fetchedCryptoPrices } = cryptoPricesActions.creators;

const fetchPrice = (dispatch) => {
  axios.get('http://localhost:5000')
    .then((response) => dispatch(fetchedCryptoPrices({ ...response.data })));
};

const priceFetcher = (store) => (next) => (action) => {
  const { type } = action;

  if (type === CRYPTO_PRICES_GET) {
    fetchPrice(store.dispatch);
  }

  return next(action);
};

export default priceFetcher;
