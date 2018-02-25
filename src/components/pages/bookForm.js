"use strict"
import React, { Component, PropTypes } from 'react';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//IMPORT ACTIONS
import {postBooks} from '../../actions/bookActions';
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

    render() {
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
            </Well>
        );
    }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		postBooks:postBooks
	},dispatch);
}

export default connect(null,mapDispatchToProps)(BookForm);

