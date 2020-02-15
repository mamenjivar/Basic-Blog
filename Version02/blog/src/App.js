import React from 'react';
import Blog from './pages/Blog';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* The header for blog page */}
        <Blog />
        {/* form block */}
      </div>
    </BrowserRouter>
  );
}

export default App;
