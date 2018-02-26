"use strict"
import React, { Component, PropTypes } from 'react';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//IMPORT ACTIONS
import {postBooks, deleteBook} from '../../actions/bookActions';
//Style
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

class BookForm extends Component {

	handleSubmit(){
		const book =[{
			title: findDOMNode(this.refs.title).value,
			description: findDOMNode(this.refs.description).value,
			price: findDOMNode(this.refs.price).value,
		}]

		this.props.postBooks(book);
	}
    onDelete(){
        let bookId = findDOMNode(this.refs.delete).value;

        this.props.deleteBook(bookId);
    }
    render() {
        const booksList = this.props.books.map(function(bookArr){
            return(
                <option key={bookArr._id}>{bookArr._id}</option>
                )
        })
        return (
            <Well>
            	<Panel>
            		<FormGroup controlId="title">
            			<ControlLabel>Title</ControlLabel>
            			<FormControl
            				type="text"
            				placeholder="Enter Book Title"
            				ref="title"
            			/>
            		</FormGroup>

            		<FormGroup controlId="description">
            			<ControlLabel>Description</ControlLabel>
            			<FormControl
            				type="text"
            				placeholder="Enter Book Description"
            				ref="description"
            			/>
            		</FormGroup>

            		<FormGroup controlId="price">
            			<ControlLabel>Price</ControlLabel>
            			<FormControl
            				type="text"
            				placeholder="Enter Book Price"
            				ref="price"
            			/>
            		</FormGroup>

					<Button onClick={this.handleSubmit.bind(this)} bsStyle="primary">Save Book</Button>  

            	</Panel>
                <Panel style={{marginTop:"25px"}}>
                    <FormGroup controlId="formControlsSelect">
                      <ControlLabel>Select</ControlLabel>
                      <FormControl ref="delete" componentClass="select" placeholder="select">
                        <option value="select">select</option>
                        {booksList}
                      </FormControl>
                    </FormGroup>
                    <Button onClick={this.onDelete.bind(this)} bsStyle="danger">Delete</Button>
                </Panel>
            </Well>
        );
    }
}

function mapStateToProps(state) {
    return{
        books:state.books.books
    }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		postBooks:postBooks,
        deleteBook:deleteBook
	},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookForm);

