import React from "react";
import styled from "styled-components";

function Coin({ name, image, symbol, price, volume, priceChange, marketcap }) {
  return (
    <CoinContainer>
      <CoinRow>
        <CoinTitle>
          <CoinImage src={image} alt="crypto" />
          <CoinName>{name}</CoinName>
          <CoinSymbol className="coin-symbol">{symbol}</CoinSymbol>
        </CoinTitle>
        <CoinData>
          <CoinPrice>$ {price}</CoinPrice>
          <CoinVolume>$ {volume.toLocaleString()}</CoinVolume>
          {priceChange < 0 ? <CoinPercentRed>{priceChange.toFixed(2)}%</CoinPercentRed> : <CoinPercentGreen>{priceChange.toFixed(2)}%</CoinPercentGreen>}
          <CoinMarketCap>Mkt Cap: ${marketcap.toLocaleString()}</CoinMarketCap>
        </CoinData>
      </CoinRow>
    </CoinContainer>
  );
}

export default Coin;

const CoinContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const CoinRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: start;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #d7d7d7;
  width: 900px;
`;

const CoinTitle = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;
  min-width: 300px;
`;

const CoinData = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;
`;

const CoinImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;

const CoinName = styled.h1`
  font-size: 16px;
  width: 150px;
`;

const CoinSymbol = styled.p`
  text-transform: uppercase;
`;

const CoinPrice = styled.p`
  width: 110px;
`;

const CoinVolume = styled.p`
  width: 200px;
`;

const CoinPercentRed = styled.p`
  width: 80px;
  color: #f00606;
`;

const CoinPercentGreen = styled.p`
  width: 80px;
  color: #11d811;
`;

const CoinMarketCap = styled.p`
  width: 240px;
`;
