import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
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
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    // to remove underline from navbar links
    const headerStyle = {
        textDecoration: "none",
        color: "white"
    }

    return (
        <div class='pb-3'>
            <Navbar color="dark" light expand="md">
                <div class='container'>
                    <NavbarBrand style={headerStyle}>
                        <FontAwesomeIcon icon={faKeyboard} />
                         blogMe
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink><Link to='/viewBlog' style={headerStyle}>View Blog </Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to='/postBlog' style={headerStyle}>Post Blog</Link></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;