import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import Form from '../Components/blogForm';
import viewBlog from './ViewBlog';
import Header from '../Components/Header';


const Home = (props) => {
    return (
        <div>
            <Header />
            <Route path='/viewBlog' exact component={ viewBlog }/>
            <Route path='/postBlog' exact component={Form} />
            <Route exact path='/'>
                <Redirect to='/viewBlog' />
            </Route>
        </div>
    );
};

export default Home;