import React, { Component} from 'react';

import {connect} from 'react-redux';

import Menu from './components/pages/menu';
import Footer from './components/pages/footer';
class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            	<Menu cartItems={this.props.totalQty}/>
            	{this.props.children}
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

export default connect(mapStateToProps)(Main);
