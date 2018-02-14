import styled from 'styled-components';

const CryptoLogoStyled = styled.img`
  height: 30px;
`;

const TransactionContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  align-items: center;
  background: #DDDDDD;
  border-radius: 5px;
  margin: 5px 0;
`;

const SectionContainer = styled.div`
  width: ${(props) => props.width};
`;

export {
  CryptoLogoStyled,
  TransactionContainerStyled,
  SectionContainer,
};
