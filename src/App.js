import React from 'react';
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import CreateAccountPage from './pages/CreateAccountPage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import EventListingsPage from './pages/EventListingsPage';
import EventPage from './pages/EventPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/create-account' element={<CreateAccountPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/account' element={<AccountPage/>} />
        <Route path='/event-list' element={<EventListingsPage/>} />
        <Route path='/event' element={<EventPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
