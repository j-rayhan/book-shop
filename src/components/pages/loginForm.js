"use strict"
import React, {Component} from 'react';
//Style
import {Well, Row, Col, Panel, FormControl, InputGroup, DropdownButton, MenuItem, FormGroup, ControlLabel, Image, Button} from 'react-bootstrap';


class LoginForm extends Component{
  render(){
    return(
      <div>
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

                <FormGroup controlId="password">
                  <ControlLabel>Password : </ControlLabel>
                    <FormControl
                      type="password"
                      placeholder="Enter Your password"
                      ref="password"
                      />
                  <FormControl.Feedback />
                </FormGroup>


          <Button

             bsStyle="success">
             LogIn
             </Button>

              </Panel>
            </Col>
            <Col sm={3} ></Col>
          </Row>

        </Well>
      </div>
    )
  }
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({
// 	},dispatch)
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Cart);
export default LoginForm;
