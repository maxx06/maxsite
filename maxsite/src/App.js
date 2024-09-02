import './App.css';
import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div className="container">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>

      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap" rel="stylesheet"></link>
      <link href="App.css" rel="stylesheet" type="text/css"></link>

      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet"></link>

      <Navbar />
      <Main />
      <About />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
