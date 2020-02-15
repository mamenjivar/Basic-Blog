import React, { Component } from 'react';
import Header from '../Components/Header';
import Form from '../Components/blogForm';

class PostBlog extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Post a blog Here</h1>
                <Form />
            </div>
        )
    }
}

export default PostBlog;