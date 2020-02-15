import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// es-6 format/syntax
const blogForm = (props) => {
    return (
        <div class='container'>
            <h1>Post Blog</h1>
            <Form>
                <FormGroup>
                    <Label for="exampleTitle">Blog Title: </Label>
                    <Input type="text" name="title" id="exampleTitle" placeholder="Title" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAuthor">Blog Author: </Label>
                    <Input type="text" name="author" id="author" placeholder="Author" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Blog Content: </Label>
                    <Input type="textarea" name="text" id="exampleText" placeholder='Content' />
                </FormGroup>
                <Button color='primary'>Submit</Button>
            </Form>
        </div>
    )
};

export default blogForm;