import { combineReducers } from 'redux';

import cryptoPrices from './cryptoPrices'
import transactions from './transactions';
import transactionModal from './transactionModal';

export default combineReducers({
  cryptoPrices,
  transactions,
  transactionModal,
});
