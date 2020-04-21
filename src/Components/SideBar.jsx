import React, {Component} from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap'
import {Link} from 'react-router-dom'
import divWithClassName from "react-bootstrap/cjs/divWithClassName";
import Button from "react-bootstrap/Button";

class SideBar extends Component {
    state = {}

    render() {
        return (
            <Nav className="over" vertical>
                <NavItem>
                    <NavLink className={'side-bar-links'} href="#">Charts</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={'side-bar-links'} href="#">New Releases</NavLink>
                </NavItem>
                <div className={'buttons-sidebar-div'}>
                    <div className={'button-sidebar'}>
                        <button type={'button'} className={'login-btn'}>LOGIN</button>
                    </div>
                    <div>
                        <button type={'button'} className={'sign-btn'}>SIGN UP</button>
                    </div>
                </div>

            </Nav>
        );
    }
}

export default SideBar;
