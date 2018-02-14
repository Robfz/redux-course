import React from 'react';
import { connect } from 'react-redux';
import values from 'ramda/src/values';
import {
  IndicatorContainerStyled,
  TextContainerStyled,
  TitleContainerStyled,
} from './PortfolioIndicator.styled';

const PortfolioIndicator = (props) => {
  const {
    title,
    text,
  } = props;
  
  return (
    <IndicatorContainerStyled>
      <TitleContainerStyled>
        { title }
      </TitleContainerStyled>
      <TextContainerStyled>
        { text }
      </TextContainerStyled>
    </IndicatorContainerStyled>
  );
};

export default PortfolioIndicator;
