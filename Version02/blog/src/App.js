import React from 'react';
import Header from './Components/Header'
import { BrowserRouter, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import Form from './Components/blogForm';
import viewBlog from './pages/ViewBlog';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* The header for blog page */}
        <Header />
        {/* form block */}
      </div>
      <Route path='/viewBlog' exact component={viewBlog} />
      <Route path='/postBlog' exact component={Form} />
      <Route exact path='/'>
        <Redirect to='/viewBlog' />
      </Route>
    </BrowserRouter>
  );
}

export default App;
