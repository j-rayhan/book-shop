"use strict"
import React, { Component, PropTypes } from 'react';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import axios from 'axios';
//IMPORT ACTIONS
import {postBooks, deleteBook, getBooks , resetBookForm} from '../../actions/bookActions';
//Style
import {Well, Row, Col, Panel, FormControl, InputGroup, DropdownButton, MenuItem, FormGroup, ControlLabel, Image, Button} from 'react-bootstrap';

class BookForm extends Component {
	constructor(){
		super();
		this.state = {
			images: [{}],
			img: ''
		}
	}
	componentDidMount(){
		this.props.getBooks();
		// GET IMAGES FROM API
		axios.get('/api/images')
			.then(function(response){
				this.setState({images:response.data});
			}.bind(this))
			.catch(function(err){
				this.setState({images: 'error loading image files from the server', img: ''});
			}.bind(this))
	}
	handleSubmit(){
		const book =[{
			title: findDOMNode(this.refs.title).valalue,
			price: findDOMNode(this.refs.price).value,
		}]

		this.props.postBooks(book);
	}
	resetForm(){
		 this.props.resetBookForm();
		 findDOMNode(this.refs.title).value='',
		 findDOMNode(this.refs.description).value='',
		 findDOMNode(this.refs.images).value='',
		 findDOMNode(this.refs.price).value=''

	}
	handleSelect(img){
		this.setState({
			img: '/images/'+img
		})
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

				const imgList = this.state.images.map(function(imgArr, i){
					return(
						<MenuItem key={i} eventKey={imgArr.name}
							onClick={this.handleSelect.bind(this, imgArr.name)}>{imgArr.name}</MenuItem>
					)
				}, this)
        return (
            <Well>
							<Row>
								<Col xs={12} sm={6}>
									<Panel>
										<InputGroup>
											<FormControl type="text" ref="images" value={this.state.img} />
											<DropdownButton
												componentClass={InputGroup.Button}
												id="input-dropdown-addon"
												title="Select an Image"
												bsStyle="primary"
											>
												{imgList}
											</DropdownButton>
										</InputGroup>
										<Image src={this.state.img} responsive />
									</Panel>
								</Col>
								<Col xs={12} sm={6}>
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

							<Button
								onClick={(!this.props.msg)?(this.handleSubmit.bind(this)):(this.resetForm.bind(this))}
								 bsStyle={(!this.props.style)?("primary"):(this.props.style)}>
								 {(!this.props.msg)?("Save book"):(this.props.msg)}
								 </Button>

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
								</Col>
							</Row>

            </Well>
        );
    }
}

function mapStateToProps(state) {
    return{
				msg:state.books.msg,
				style:state.books.style,
        books:state.books.books
    }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		postBooks,
    deleteBook,
		getBooks,
		resetBookForm
	},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookForm);
