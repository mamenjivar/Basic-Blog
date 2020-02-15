import React from 'react';
import Header from './Components/Header';
import Form from './Components/blogForm';
import './App.css';

function App() {
  return (
    <div>
      {/* The header for blog page */}
      <Header />
      {/* form block */}
      <Form />
    </div>
  );
}

export default App;
