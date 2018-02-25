"use strict"
import React, { Component, PropTypes } from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

class BookForm extends Component {

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

					<Button bsStyle="primary">Save Book</Button>  

            	</Panel>
            </Well>
        );
    }
}

export default BookForm;

