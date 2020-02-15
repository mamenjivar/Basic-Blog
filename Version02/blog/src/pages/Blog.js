import React, { useState } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import Form from '../Components/blogForm';
import viewBlog from './ViewBlog';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen ] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    // to remove underline from navbar links
    const headerStyle = {
        textDecoration: "none"
    }

    return (
        <div class='pb-3'>
            <Navbar color="dark" light expand="md">
                <div class='container'>
                    <NavbarBrand>blogMe</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink><Link to='/viewBlog' style={headerStyle}>View Blog </Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to='/postBlog' style={ headerStyle }>Post Blog</Link></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Route path='/viewBlog' exact component={ viewBlog }/>
            <Route path='/postBlog' exact component={Form} />
        </div>
    );
};

export default Header;