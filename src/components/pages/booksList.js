import React, { Component, PropTypes } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Col, Row, Button} from 'react-bootstrap';

import {getBooks} from '../../actions/bookActions';

class BooksList extends Component {
    componentDidMount(){
    	//DISPATCH AN ACTION
    	this.props.getBooks();
    }
    render() {
    	const booksList = this.props.books.map(function(bookArr){
    		return(
    				<div key={bookArr._id}>
    					<h2>{bookArr.title}</h2>
    					<h2>{bookArr.description}</h2>
    					<h2>{bookArr.price}</h2>
    					<Button bsStyle="primary">Primary</Button>
    				</div>
    			)
    	})
        return (
            <Grid>
            	<Row style={{marginTop:"15px"}}>
            	{booksList}
            	</Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
	return{
		books: state.books.books
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getBooks: getBooks
	}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);