import React, { Component } from 'react';
import axios from 'axios';

class blogForm extends Component {

    constructor(props) {
        super(props);

        this.onChangeBlogTitle = this.onChangeBlogTitle.bind(this);
        this.onChangeBlogAuthor = this.onChangeBlogAuthor.bind(this);
        this.onChangeBlogBody = this.onChangeBlogBody.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            blog_title: '',
            blog_author: '',
            blog_body: ''
        }
    }

    onChangeBlogTitle(e) {
        this.setState({
            blog_title: e.target.value
        });
    }

    onChangeBlogAuthor(e) {
        this.setState({
            blog_author: e.target.value
        });
    }

    onChangeBlogBody(e) {
        this.setState({
            blog_body: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log('FORM SUBMITTED!');
        console.log(`Title: ${this.state.blog_title}`);
        console.log(`Author: ${this.state.blog_author}`);
        console.log(`Blog: ${this.state.blog_body}`);

        const newBlog = {
            blog_title: this.state.blog_title,
            blog_author: this.state.blog_author,
            blog_body: this.state.blog_body
        };

        axios({
            method: 'post',
            url: 'http://localhost:4000/blog/new',
            data: {
                title: newBlog.blog_title,
                author: newBlog.blog_author,
                body: newBlog.blog_body
            }
        });

        this.setState({
            blog_title: '',
            blog_author: '',
            blog_body: ''
        })
    }

    render() {
        return (
            <div class='container'>
                <h1 className='text-center'>Post Blog</h1>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Blog Title: </label>
                        <input type='text'
                               className='form-control'
                               placeholder='Title'
                               value={this.state.blog_title}
                               onChange={this.onChangeBlogTitle}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Blog Author: </label>
                        <input type='text'
                               className='form-control'
                               placeholder='Author'
                               value={this.state.blog_author}
                               onChange={this.onChangeBlogAuthor}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Blog Content: </label>
                        <textarea type='text'
                            className='form-control'
                            placeholder='Content'
                            value={this.state.blog_body}
                            onChange={this.onChangeBlogBody}
                        />
                    </div>
                    <div className='form-group'>
                        <input type='submit' value='Create Blog' className='btn btn-primary' />
                    </div>
                </form>
            </div>
        )
    };
}

export default blogForm;