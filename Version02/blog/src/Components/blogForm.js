import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
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
            blog_title: e.target_value
        });
    }

    onChangeBlogAuthor(e) {
        this.setState({
            blog_author: e.target_value
        });
    }

    onChangeBlogBody(e) {
        this.setState({
            blog_author: e.target_value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log('FORM SUBMITTED!');
        console.log(`Title: ${this.state.title}`);
        console.log(`Author: ${this.state.author}`);
        console.log(`Blog: ${this.state.body}`);

        const newBlog = {
            blog_title: this.state.blog_title,
            blog_author: this.state.blog_author,
            blog_body: this.state.blog_body
        };

        axios.post('http://localhost:3000/blog/new', newBlog)
            .then(res => console.log(res.data));

        this.setState({
            blog_title: '',
            blog_author: '',
            blog_body: ''
        })
    }

    render() {
        return (
            <div class='container'>
                <h1>Post Blog</h1>
                <Form autoComplete='off' onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="exampleTitle">Blog Title: </Label>
                        <Input type="text" 
                               name="title" 
                               id="exampleTitle" 
                               placeholder="Title" 
                               value={this.state.blog_title} 
                               onChange={this.onChangeBlogTitle}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAuthor">Blog Author: </Label>
                        <Input type="text" 
                               name="author" 
                               id="author" 
                               placeholder="Author" 
                               value={this.state.blog_author} 
                               onChange={this.onChangeBlogAuthor}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Blog Content: </Label>
                        <Input type="textarea" 
                               name="text" 
                               id="exampleText" 
                               placeholder='Content' 
                               value={this.state.blog_body} 
                               onChange={this.onChangeBlogBody}/>
                    </FormGroup>
                    <Button color='primary'>Submit</Button>
                </Form>
            </div>
        )
    };
}

export default blogForm;