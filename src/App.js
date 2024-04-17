import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import CreateAccountPage from './pages/CreateAccountPage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import EventListingsPage from './pages/EventListingsPage';
import EventPage from './pages/EventPage';
import VenuePage from './pages/VenuePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/create-account' element={<CreateAccountPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/account' element={<AccountPage/>} />
        <Route path='/account/settings' element={<AccountSettingsPage/>} />
        <Route path='/event-list' element={<EventListingsPage/>} />
        <Route path='/event' element={<EventPage/>} />
        <Route path='/venues' element={<VenuePage/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
