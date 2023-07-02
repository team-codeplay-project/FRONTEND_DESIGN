import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import MainPage from './pages/main';
import TicketBookingPage from './pages/ticketbooking';
import MyPage from './pages/mypage';
import EventPage from './pages/event';
import TestPage from './pages/raffle';
import SeatSelectionPage from './components/seatselection';
import { useState } from 'react';
import './App.css';
import Footer from './components/footer';
import Rafflelist from './pages/rafflelist';
import Raffle from './pages/raffle';

function App() {
  const [account, setAccount] = useState('');
  return (
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
          <Header account={account} setAccount={setAccount} />
          <Routes>
            <Route exact path="/" element={<MainPage account={account} />} />
            <Route
              path="/ticket-booking"
              element={<TicketBookingPage account={account} />}
            />
            <Route path="/mypage" element={<MyPage account={account} />} />
            <Route path="/event" element={<EventPage account={account} />} />
            <Route path="/test" element ={<Rafflelist account={account} />}/>
            <Route path="/test/:r_idx" element={<Raffle account={account} />} />
            <Route
              path="/seatselection"
              element={<SeatSelectionPage account={account} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
