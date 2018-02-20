import axios from 'axios';
import cryptoPricesActions from '../actions/cryptoPrices';

const { CRYPTO_PRICES_GET } = cryptoPricesActions.types;
const { fetchedCryptoPrices } = cryptoPricesActions.creators;

const API_URL = 'http://159.65.72.172';

const fetchPrice = (dispatch) => {
  axios.get(`${API_URL}/prices`)
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
