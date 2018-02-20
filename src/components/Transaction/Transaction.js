import React from 'react';
import {
  CryptoLogoStyled,
  TransactionContainerStyled,
  SectionContainer,
} from './Transaction.styled';
import cryptoImages from '../../res/cryptoImages';
import { formatForCurrency } from '../../utils';

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
        {transaction.amount} {(transaction.crypto).toUpperCase()}
      </SectionContainer>
      <SectionContainer width={'20%'}>
        ${formatForCurrency(transaction.price)} USD
      </SectionContainer>
      <SectionContainer width={'20%'}>
        ${formatForCurrency(transaction.amount * transaction.price)} USD
      </SectionContainer>
      <SectionContainer width={'20%'}>
        ${formatForCurrency(transaction.amount * cryptoPrice)} USD
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
