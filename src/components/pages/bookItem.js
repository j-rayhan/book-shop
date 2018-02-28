import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addToCart, updateCartItem} from '../../actions/cartActions';
//style
import {Well, Col, Row, Button, Image} from 'react-bootstrap';

class BookItem extends Component {
	handleCart(){
		const book = [...this.props.cart, {
			_id: this.props._id,
			title: this.props.title,
			description: this.props.description,
			images: this.props.images,
			price: this.props.price,
			quantity:1
		}]
		//CHECK IF CART IS EMPTY
		if (this.props.cart.length > 0)
			{
				//CART IS NOT EMPTY
				let _id = this.props._id;

				let cartIndex = this.props.cart.findIndex(function(cart) {
					return cart._id ===  _id;
					// body...
				})
				//IF RETURNS -1 THERE ARE NO ITEMS WITH SAME ID
				if (cartIndex === -1)
				 {
				 	this.props.addToCart(book);
				 }
				 else
				 {
				 	//WE NEED TO UPDATE QUANTITY
				 	this.props.updateCartItem(_id,1, this.props.cart);
				 }
			}
		else
		{
			//CART IS EMPTY
			this.props.addToCart(book);
		}
	}
    render() {
        return (
        	<Well>
        		<Row>
							<Col xs={12} sm={4}>
								<Image src={this.props.images} responsive />
							</Col>
        		<Col xs={6} sm={8}>
					    <h6>{this.props.title}</h6>
							<p>{this.props.description}</p>
							<h6>TK : {this.props.price}</h6>
							<Button onClick={this.handleCart.bind(this)} bsStyle="primary">Buy now</Button>
						</Col>
				</Row>
			</Well>
        );
    }
}

function mapStateToProps(state) {
	return {
		cart: state.cart.cart
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		addToCart:addToCart,
		updateCartItem:updateCartItem
	}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookItem);
