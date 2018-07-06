import { createAction } from 'redux-actions';


const CRYPTO_PRICES_FAILED = 'CRYPTO_PRICES_FAILED';
const CRYPTO_PRICES_FETCHED = 'CRYPTO_PRICES_FETCHED';
const CRYPTO_PRICES_GET = 'CRYPTO_PRICES_GET';

const fetchedCryptoPrices = createAction(CRYPTO_PRICES_FETCHED);
const getCryptoPrices = (payload = {}) => ({ type: CRYPTO_PRICES_GET, payload });
const failedCryptoPrices = createAction(CRYPTO_PRICES_FAILED);

export default {
  types: {
    CRYPTO_PRICES_FAILED,
    CRYPTO_PRICES_FETCHED,
    CRYPTO_PRICES_GET,
  },
  creators: {
    fetchedCryptoPrices,
    getCryptoPrices,
    failedCryptoPrices,
  },
};
