import React, { Component } from 'react';
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
      <a href="/">React-Book-Shope</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="/about">
        About
      </NavItem>
      <NavItem eventKey={2} href="/contact">
        Contact
      </NavItem>
      
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="/admin">
        Admin
      </NavItem>
      <NavItem eventKey={2} href="/cart">
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
