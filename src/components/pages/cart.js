"use strict"
import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

//Style
import { Panel, Row, Col, Label, Button, ButtonGroup} from 'react-bootstrap';

class Cart extends Component{
	render(){
		if (this.props.cart[0]) {
			return this.renderCart();
		} else {
			return this.renderEmpty();
		}
		
	}
		renderEmpty(){
			return (<div></div>)
		}

		renderCart(){
			const cartItems = this.props.cart.map(function(cartArr){
				return (
						<Panel key={cartArr._id}>
							<Row>
								<Col xs={12} sm={4}>
									<h6>{cartArr.title}</h6>
								</Col>
								<Col xs={12} sm={2}>
									<h6>TK. {cartArr.price}</h6>
								</Col>
								<Col xs={12} sm={2}>
									<h6>qty. <Label bsStyle="success">10</Label></h6>
								</Col>
								<Col xs={6} sm={4}>
									<ButtonGroup style={{minWidth:"300px"}}>
										<Button bsStyle="default" bsSize="small">+</Button>
										<Button bsStyle="default" bsSize="small">-</Button>
										<span></span>
										<Button bsStyle="danger" bsSize="small">DELET</Button>
									</ButtonGroup>
								</Col>
							</Row>
						</Panel>
					)
			});
			return(
				<Panel header="Cart" bsStyle="primary">
				{cartItems}
				</Panel>
			)
		}
}

function mapStateToProps(state) {
	return{
		cart: state.cart.cart
	}
}

export default connect(mapStateToProps)(Cart);