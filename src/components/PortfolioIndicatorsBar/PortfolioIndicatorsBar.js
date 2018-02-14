import React from 'react';
import { connect } from 'react-redux';
import values from 'ramda/src/values';
import PortfolioIndicator from '../PortfolioIndicator';
import { IndicatorsContainerStyled } from './PortfolioIndicatorsBar.styled';

// Thanks: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
const numberWithCommas = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

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
        text={`$${numberWithCommas(totalInvestment)} USD`}
      />
      <PortfolioIndicator
        title={'Portfolio Value'}
        text={`$${numberWithCommas(portfolioValue)} USD`}
      />
      <PortfolioIndicator
        title={'Profits'}
        text={`$${numberWithCommas(profit)} USD`}
      />
      <PortfolioIndicator
        title={'% Change'}
        text={`${percentageChange} %`}
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
  , 0).toFixed(2);

  const portfolioValue = values(transactions).reduce(
    (total, transaction) => total + transaction.amount * cryptoPrices[transaction.crypto]
  , 0).toFixed(2);

  const profit = (portfolioValue - totalInvestment).toFixed(2);

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
