import transactionModalActions from '../actions/transactionModal';

const initalState = {
  isModalOpen: false,
};

const transactionModalReducer = (state = initalState, action) => {
  const { type } = action;

  switch (type) {
    case transactionModalActions.types.TRANSACTION_MODAL_SHOW:
      return { isModalOpen: true };

    case transactionModalActions.types.TRANSACTION_MODAL_HIDE:
      return { isModalOpen: false };

    default:
      return state;
  }
};

export default transactionModalReducer;
