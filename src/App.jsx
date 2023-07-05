import React, { createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import MainPage from './pages/main';
import TicketBookingPage from './pages/ticketbooking';
import MyPage from './pages/mypage';
import EventPage from './pages/event';
import SeatSelectionPage from './components/seatselection';
import { useState } from 'react';
import './App.css';
import Footer from './components/footer';
import Rafflelist from './pages/rafflelist';
import Raffle from './pages/raffle';

export const AppContext = createContext();

function App() {
  const [account, setAccount] = useState('');
  const [logIn , setLogIn] = useState(false);

  const connect = async () => {
    try { 
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
      setLogIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  const chkchainID = async() => {

    try {

      const id = await window.ethereum.request({
        "method": "eth_chainId",
        "params": []
      });

      if( id !== 0x5 ) {
        await window.ethereum.request({
          "method": "wallet_switchEthereumChain",
          "params": [
            {
              "chainId": "0x5"
            }
          ]
        });
      } 
    } catch (error) {
      console.error(error) ;
    }
  }

  useEffect( () => { 
    connect() ;
    chkchainID();
   } , [] ) ;

  return (
    <AppContext.Provider value={{ account , connect , chkchainID , logIn }}>
    <BrowserRouter>
      <div
        className="app-container"
        style={{
          maxWidth: '375px',
          maxHeight: '844px',
          margin: '30px auto',
          paddingTop: '20px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ flex: 1 }}>
          {/* Set flex property to 1 for the content to take up remaining space */}
          <Header />
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route
              path="/ticket-booking"
              element={<TicketBookingPage/>}
            />
            <Route path="/mypage" element={<MyPage  />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="/test" element ={<Rafflelist  />}/>
            <Route path="/test/:r_idx" element={<Raffle />} />
            <Route
              path="/seatselection"
              element={<SeatSelectionPage  />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
