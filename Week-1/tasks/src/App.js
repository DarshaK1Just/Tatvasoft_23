// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Home from './pages/Home';
import About from './components/About';
import {Routes, Route, useNavigate} from 'react-router-dom';
// import UserGreeting from './components/UserGreeting';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [homeDescription, setHomeDescription] = useState('Welcome to the Home Page');
  const [aboutDescription, setAboutDescription] = useState('Learn more about us on the About Page');
  function handleButtonClick() {
    setCurrentPage(currentPage === 'home' ? 'about' : 'home');
  }
  return (
    <div className="App">
      {/* <Home/>     
      <About/> */}
      <button onClick={handleButtonClick}>Toggle Page</button>
      {currentPage === 'home' ? (
        <Home description={homeDescription} />
      ) : (
        <About description={aboutDescription} />
      )}
    </div>
  );
}

export default App;
