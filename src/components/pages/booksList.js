import React, { Component, PropTypes } from 'react';

import {connect} from 'react-redux';

class BooksList extends Component {
    
    render() {
    	const booksList = this.props.books.map(function(bookArr){
    		return(
    				<div key={bookArr.id}>
    					<h2>{bookArr.title}</h2>
    					<h2>{bookArr.description}</h2>
    					<h2>{bookArr.price}</h2>
    				</div>
    			)
    	})
        return (
            <div>
            	<h1>Hello React</h1>
            	{booksList}
            </div>
        );
    }
}

function mapStateToProps(state) {
	return{
		books: state.books.books
	}
}

export default connect(mapStateToProps)(BooksList);