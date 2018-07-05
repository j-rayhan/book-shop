"use strict"
import React, { Component } from 'react';
import {Well, Row, Col, Panel, FormControl, InputGroup, DropdownButton, MenuItem, FormGroup, ControlLabel, Image, Button} from 'react-bootstrap';

class Contact extends Component {
  render(){
    return (
      <div>
        <h2 className="text-center home-title">Contact With Me</h2>
        <Well>
          <Row style={{margin: "50px"}}>
            <Col sm={3} ></Col>
            <Col xs={12} sm={6}>
              <Panel>
                <FormGroup controlId="name" >
                  <ControlLabel>Name : </ControlLabel>
                  <FormControl
                    type="text"
                    placeholder="Enter Your Name"
                    ref="name"
                  />
                  <FormControl.Feedback />
                </FormGroup>

                <FormGroup controlId="email" >
                  <ControlLabel>E-mail : </ControlLabel>
                  <InputGroup>
                    <InputGroup.Addon>@</InputGroup.Addon>
                    <FormControl
                      type="email"
                      placeholder="Enter Your e-mail"
                      ref="email"
                      />
                  </InputGroup>
                  <FormControl.Feedback />
                </FormGroup>

                <FormGroup controlId="message" >
                  <ControlLabel>Message : </ControlLabel>
                <FormControl
                    componentClass="textarea"
                    placeholder="Write your message..."
                    ref="message"
                  />
                  <FormControl.Feedback />
                </FormGroup>

          <Button

             bsStyle="primary">
             Submit
             </Button>

              </Panel>
            </Col>
            <Col sm={3} ></Col>
          </Row>

        </Well>
      </div>
    );
  }
};

export default Contact;
