import React from 'react';
import {
  CryptoLogoStyled,
  TransactionContainerStyled,
  SectionContainer,
} from './Transaction.styled';
import cryptoImages from '../../res/cryptoImages';

const Transaction = (props) => {
  const {
    cryptoPrice,
    removeTransaction,
    transaction,
  } = props;

  const handleDeleteButtonClick = () =>
    removeTransaction({ transaction });

  return (
    <TransactionContainerStyled>
      <SectionContainer width={'10%'}>
        <CryptoLogoStyled src={cryptoImages[transaction.crypto]} />
      </SectionContainer>
      <SectionContainer width={'20%'}>
        {transaction.type}
      </SectionContainer>
      <SectionContainer width={'20%'}>
        {transaction.amount} {transaction.crypto}
      </SectionContainer>
      <SectionContainer width={'20%'}>
        ${transaction.price} USD
      </SectionContainer>
      <SectionContainer width={'20%'}>
        ${transaction.amount * transaction.price}
      </SectionContainer>
      <SectionContainer width={'20%'}>
        {transaction.amount * cryptoPrice}
      </SectionContainer>
      <SectionContainer width={'10%'}>
        <button onClick={handleDeleteButtonClick}>
          Delete
        </button>
      </SectionContainer>
    </TransactionContainerStyled>
  );
};

export default Transaction;
