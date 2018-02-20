import React from 'react';

const AddDummyTransactionButton = () => {

  const handleClick = () => {
    const newTransaction = {
      id: `${Math.random()}`,
      crypto: 'eth',
      type: 'buy',
      price: 850,
      amount: 10.2367,
    };
  };

  return (
    <button onClick={handleClick}>Add dummy transaction</button>
  );
};

export default AddDummyTransactionButton;
