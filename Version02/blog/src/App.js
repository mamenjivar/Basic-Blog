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

        <Route path='/viewBlog' exact component={viewBlog} />
        <Route path='/postBlog' exact component={Form} />
        <Route exact path='/'>
          <Redirect to='/viewBlog' />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
