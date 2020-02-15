import React, { useState } from 'react';
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

    return (
        <div class='pb-3'>
            <Navbar color="light" light expand="md">
                <div class='container'>
                    <NavbarBrand>blogMe</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="">View Blogs</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Post Blog</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;