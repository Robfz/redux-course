import { delay } from 'redux-saga';
import axios from 'axios';
import { all, call, take, takeEvery, put, race } from 'redux-saga/effects'; 
import cryptoPricesActions from '../actions/cryptoPrices';
import transactionActions from '../actions/transactions';

const {
  CRYPTO_PRICES_GET,
  CRYPTO_PRICES_FAILED,
} = cryptoPricesActions.types;

const {
  TRANSACTION_ADD,
} = transactionActions.types;

const {
  fetchedCryptoPrices,
  failedCryptoPrices,
} = cryptoPricesActions.creators;

const API_URL = 'http://159.65.72.172';

const fetchPrice = (url) => {
  return axios.get(url)
    .then((response) => response);
};

function* getCryptoPrices() {
  try {
    const { cryptoPrices, timeout } = yield race({
      cryptoPrices: call(fetchPrice, `${API_URL}/prices`),
      timeout: delay(10),
    });

    if (timeout) {
      throw 'timeout';
    }

    const { data } = cryptoPrices;
    // const { data } = yield call(fetchPrice, `${API_URL}/prices`);
    yield put(fetchedCryptoPrices({ prices: data.prices }));
  } catch (e) {
    yield put(failedCryptoPrices({ error: e }))
  }
}

function* watchCryptoPricesRequested() {
  yield takeEvery(CRYPTO_PRICES_GET, getCryptoPrices);
}

function* watchAddTransaction() {
  yield takeEvery(TRANSACTION_ADD, getCryptoPrices);
}

function* watchCryptoPricesFailes() {
  function* failed() {
    yield put(({ type: 'SHOW_ERROR_NOTIFICATION' }))
  }

  yield takeEvery(CRYPTO_PRICES_FAILED, failed)
}

function* rootSaga () {
  yield all([
    watchCryptoPricesRequested(),
    watchAddTransaction(),
    watchCryptoPricesFailes(),
  ]);
}

const it = getCryptoPrices();

console.log(it.next());
console.log(it.next({ timeout: {} }));
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

export default rootSaga;
