const initialState = {
  BTC: 8500,
  ETH: 860,
  LTC: 155,
  XRP: .98,
};

const cryptoPricesReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default cryptoPricesReducer;
