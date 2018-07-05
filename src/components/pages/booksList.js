"use strict"
import React, { Component, PropTypes } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Carousel ,Grid, Col, Row, Button} from 'react-bootstrap';

import {getBooks} from '../../actions/bookActions';

import BookItem from './bookItem';
import BookForm from './bookForm';
import Cart from './cart';

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
                images={bookArr.images}
    						price={bookArr.price}
    						/>
    				</Col>
    			)
    	})
        return (
            <Grid>
            	<Row style={{marginTop:"15px"}}>
                <Carousel>
                  <Carousel.Item>
                    <img width={900} height={300} alt="900x500" src="/images/carousel/home_0.png" />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img width={900} height={300} alt="900x500" src="/images/carousel/home_1.png" />
                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img width={900} height={300} alt="900x500" src="/images/carousel/home_2.png" />
                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
            	</Row>
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
