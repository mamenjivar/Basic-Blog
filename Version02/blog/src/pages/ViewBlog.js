import React, { Component } from 'react';
// import bootstrap from 'reactstrap';
import axios from 'axios';
// import { Link } from 'react-router-dom';

const Blog = props => (
    <ul>
        <li>{props.blog.title}</li>
        <li>{props.blog.author}</li>
        <li>{props.blog.body}</li>
    </ul>
)

class ViewBlog extends Component {
    // create a new state with emtpy array for blogs
    constructor(props) {
        super(props);
        this.state = {blogs: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/blog')
            .then(response => {
                this.setState({ blogs: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    blogList() {
        return this.state.blogs.map((currentBlog, i) => {
            return <Blog blog={ currentBlog } key={i} />
        });
    }

    render() {
        return (
            <div class='container'>
                <h1>View Blogs</h1>
                { this.blogList() }
            </div>
        );
    }
}

export default ViewBlog;