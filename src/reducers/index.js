import { combineReducers } from 'redux';

import transactions from './transactions';
import transactionModal from './transactionModal';

export default combineReducers({
  transactions,
  transactionModal,
});
