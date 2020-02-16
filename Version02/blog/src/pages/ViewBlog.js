import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeading, faUser, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Blog = props => (

    <ListGroup className='my-5' flush>
        <ListGroupItem>
            <h2>
                <FontAwesomeIcon icon={faHeading} />
            </h2>{props.blog.title}
        </ListGroupItem>
        <ListGroupItem>
            <h3>
                <FontAwesomeIcon icon={faUser} />
            </h3>{props.blog.author}</ListGroupItem>
        <ListGroupItem>
            <h4>
                <FontAwesomeIcon icon={faFileAlt} />
            </h4>{props.blog.body}</ListGroupItem>
    </ListGroup>
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
            <div  className='container'>
                <h1 className='text-center'>View Blogs</h1>
                { this.blogList() }
            </div>
        );
    }
}

export default ViewBlog;