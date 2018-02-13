import { createAction } from 'redux-actions';

const TRANSACTION_MODAL_SHOW = 'TRANSACTION_MODAL_SHOW';
const TRANSACTION_MODAL_HIDE = 'TRANSACTION_MODAL_HIDE';

const showTransactionModal = (payload = {}) => ({ type: TRANSACTION_MODAL_SHOW, payload });
const hideTransactionModal = createAction(TRANSACTION_MODAL_HIDE);

export default {
  types: {
    TRANSACTION_MODAL_SHOW,
    TRANSACTION_MODAL_HIDE,
  },
  creators: {
    showTransactionModal,
    hideTransactionModal,
  },
};
