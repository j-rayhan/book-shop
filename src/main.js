import React, { Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Menu from './components/pages/menu';
import Footer from './components/pages/footer';
import {getCart} from './actions/cartActions';

class Main extends Component {
    componentDidMount(){
  		this.props.getCart();
  	}
    render() {
        return (
            <div>
            	<Menu cartItems={this.props.totalQty}/>
                <div className="container">
                	{this.props.children}
                </div>
            	<Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
	return{
		totalQty: state.cart.totalQty
	}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getCart:getCart
	},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Main);
