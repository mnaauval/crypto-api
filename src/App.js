import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Coin from "./Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
        // console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <CoinApp>
      <CoinSearch>
        <CoinText>Search a currency</CoinText>
        <form>
          <CoinInput type="text" placeholder="Search" onChange={handleChange} />
        </form>
      </CoinSearch>
      {filteredCoins.map((coin) => {
        return <Coin key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} volume={coin.market_cap} price={coin.current_price} priceChange={coin.price_change_percentage_24h} marketcap={coin.total_volume} />;
      })}
    </CoinApp>
  );
}

export default App;

const CoinApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  color: #fff;
`;

const CoinSearch = styled.div`
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CoinText = styled.h1`
  margin-bottom: 32px;
  text-align: center;
`;

const CoinInput = styled.input`
  padding-left: 16px;
  width: 300px;
  height: 40px;
  border-radius: 4px;
  border: none;
  background-image: linear-gradient(-225deg, #ac32e4 0%, #7918f2 48%, #4801ee 100%);
  color: #e2e2e2;
  ::placeholder {
    color: white;
  }
`;
