import './App.css';
import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <Contact />
    </div>
  );
}

export default App;
