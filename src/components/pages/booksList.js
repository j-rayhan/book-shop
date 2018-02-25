"use strict"
import React, { Component, PropTypes } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Col, Row, Button} from 'react-bootstrap';

import {getBooks} from '../../actions/bookActions';

import BookItem from './bookItem';
import BookForm from './bookForm';

class BooksList extends Component {
    componentDidMount(){
    	//DISPATCH AN ACTION
    	this.props.getBooks();
    }
    render() {
    	const booksList = this.props.books.map(function(bookArr){
    		return(
    				<Col xs={12} sm={6} md={4} key={bookArr._id}>
    					<BookItem
    						_id ={bookArr._id}
    						title ={bookArr.title}
    						description={bookArr.description}
    						price={bookArr.price}
    						/>
    				</Col>
    			)
    	})
        return (
            <Grid>
            	<Row style={{marginTop:"15px"}}>
	            	<Col xs={12} sm={6}>
	            		<BookForm />
	            	</Col>
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