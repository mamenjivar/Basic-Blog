import React from 'react';
import Header from './Blog/Header';
import Personn from './Blog/blogForm';
import './App.css';

function App() {
  return (
    <div>
      {/* The header for blog page */}
      <Header />
      {/* this is the form, there is a bug where I can't rename it for some reason */}
      <Personn />
    </div>
  );
}

export default App;
