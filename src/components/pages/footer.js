import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer text-center">
            	<div className="container">
            		<p className="footer-text">Copyright 2018 BooksShop. All rights reserved.</p>
            	</div>
            </footer>
        );
    }
}

export default Footer;
