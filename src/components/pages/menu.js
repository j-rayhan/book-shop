import React, { Component } from 'react';
import {browserHistory, Link} from 'react-router';
import {Navbar, Nav, NavItem, Badge} from 'react-bootstrap';

class Menu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar inverse fixedTop>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/">React-Book-Shope</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem eventKey={1} onClick={()=> browserHistory.push('/about')}>
                    About
                  </NavItem>
                  <NavItem eventKey={2} onClick={()=> browserHistory.push('/contact')}>
                    Contact
                  </NavItem>
                </Nav>
                <Nav pullRight>
                  <NavItem eventKey={1} onClick={()=> browserHistory.push('/admin')}>
                    Admin
                  </NavItem>
                  <NavItem eventKey={2} onClick={()=> browserHistory.push('/cart')}>
                    Your Cart
                          {(this.props.cartItems > 0)?(<Badge className="badge">{this.props.cartItems}</Badge>):("")}
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;
