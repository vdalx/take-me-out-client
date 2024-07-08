import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import CreateAccountPage from './pages/CreateAccountPage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import ArticlePage from './pages/ArticlePage';
import EventListingsPage from './pages/EventListingsPage';
import EventPage from './pages/EventPage';
import VenuePage from './pages/VenuePage';
import HeaderNavigation from './components/HeaderNavigation';
import Footer from './components/Footer';
import { AuthProvider } from './authContext';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <AuthProvider>
        <HeaderNavigation />
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/home' element={<HomePage/>} />
          <Route path='/posts/:postId' element={<ArticlePage/>} />
          <Route path='/create-account' element={<CreateAccountPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/account' element={<AccountPage/>} />
          <Route path='/account/settings' element={<AccountSettingsPage/>} />
          <Route path='/events' element={<EventListingsPage/>} />
          <Route path='/events/:eventId' element={<EventPage/>} />
          <Route path='/venues' element={<VenuePage/>} />
        </Routes>
        <Footer />
        </AuthProvider>
        </BrowserRouter>
      </div>
  );
}

export default App;
