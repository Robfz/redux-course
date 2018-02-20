import React from 'react';
import { connect } from 'react-redux';
import values from 'ramda/src/values';
import PortfolioIndicator from '../PortfolioIndicator';
import { IndicatorsContainerStyled } from './PortfolioIndicatorsBar.styled';
import {
  formatForCurrency,
  numberWithCommas,
} from '../../utils';

const PortfolioIndicatorsBar = (props) => {
  const {
    totalInvestment,
    percentageChange,
    portfolioValue,
    profit,
  } = props;

  return (
    <IndicatorsContainerStyled>
      <PortfolioIndicator 
        title={'Total Investment'}
        text={`$${formatForCurrency(totalInvestment)} USD`}
      />
      <PortfolioIndicator
        title={'Portfolio Value'}
        text={`$${formatForCurrency(portfolioValue)} USD`}
      />
      <PortfolioIndicator
        title={'Profits'}
        text={`$${formatForCurrency(profit)} USD`}
      />
      <PortfolioIndicator
        title={'% Change'}
        text={`${numberWithCommas(percentageChange)} %`}
      />
    </IndicatorsContainerStyled>
  );
};

const mapStateToProps = (state) => {
  const {
    cryptoPrices,
    transactions,
  } = state;

  const totalInvestment = values(transactions).reduce(
    (total, transaction) => total + transaction.amount * transaction.price
  , 0);

  const portfolioValue = values(transactions).reduce(
    (total, transaction) => total + transaction.amount * cryptoPrices[transaction.crypto]
  , 0);

  const profit = (portfolioValue - totalInvestment);

  let percentageChange = ((portfolioValue / totalInvestment - 1) * 100).toFixed(2);

  if (isNaN(percentageChange)) {
    percentageChange = 0;
  }

  return {
    totalInvestment,
    percentageChange,
    portfolioValue,
    profit,
  };
};

export default connect(mapStateToProps)(PortfolioIndicatorsBar);
