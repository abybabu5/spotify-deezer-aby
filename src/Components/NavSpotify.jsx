import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav, Navbar} from "react-bootstrap";

class NavSpotify extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <div className={'nav-text'}><Nav.Link className="Nav" href="/">Home</Nav.Link></div>
                        <div className={'nav-text'}><Nav.Link className="Nav" href="#features">Features</Nav.Link></div>
                        <div className={'nav-text'}> <Nav.Link className="Nav" href="#pricing">Pricing</Nav.Link></div>

                    </Nav>
                </Navbar>
            </>
        );
    }
}

export default NavSpotify;
