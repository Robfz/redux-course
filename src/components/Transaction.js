import React from 'react';

const Transaction = (props) => {
  const { transaction } = props;

  return (
    <div>{transaction.id}</div>
  );
};

export default Transaction;
