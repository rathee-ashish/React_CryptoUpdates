import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import Coins from './components/Coins';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Coin from './routes/Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Use useLocation hook to get the current location
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Navbar />
      {isHomePage && ( // Conditionally render the div based on the route
        <div className='coin-app'>
          <div className='coin-search'>
            <input
              type='text'
              placeholder='Search coins'
              value={searchQuery}
              onChange={handleSearch}
              className='coin-input'
            />
          </div>
        </div>
      )}

      <Routes>
        <Route path='/' element={<Coins coins={filteredCoins} />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
