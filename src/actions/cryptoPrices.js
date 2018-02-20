import { createAction } from 'redux-actions';

const CRYPTO_PRICES_FETCHED = 'CRYPTO_PRICES_FETCHED';
const CRYPTO_PRICES_GET = 'CRYPTO_PRICES_GET';

const fetchedCryptoPrices = createAction(CRYPTO_PRICES_FETCHED);
const getCryptoPrices = (payload = {}) => ({ type: CRYPTO_PRICES_GET, payload });

export default {
  types: {
    CRYPTO_PRICES_FETCHED,
    CRYPTO_PRICES_GET,
  },
  creators: {
    fetchedCryptoPrices,
    getCryptoPrices,
  },
};
