"use strict"
import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

//Style
import { Panel, Row, Col, Label, Button, ButtonGroup} from 'react-bootstrap';


import {bindActionCreators} from 'redux';

import {deleteCartItem} from '../../actions/cartActions';
class Cart extends Component{
	onDelete(_id){
 		//CREATE A COPY OF THE CURRENT ARRAY OF BOOKS
         const currentBooks = this.props.cart;
         //DETERMINE AT WHICH INDEX IN BOOKS ARRAY IS THE BOOK TO BE DELETED
         const indexToDelete = currentBooks.findIndex(
                function(cart){
                    return cart._id === parseInt(_id);
                }
            )
         // USE SLICE TO REMOVE THE BOOK AT THE SPECIFIED INDEX
         let cartAfterDelete = [...currentBooks.slice(0, indexToDelete), ...currentBooks.slice(indexToDelete + 1)];
         
		this.props.deleteCartItem(cartAfterDelete);
	}
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
										<Button onClick={this.onDelete.bind(this, cartArr._id)} bsStyle="danger" bsSize="small">DELET</Button>
									</ButtonGroup>
								</Col>
							</Row>
						</Panel>
					)
			}, this);
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		deleteCartItem:deleteCartItem
	},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);