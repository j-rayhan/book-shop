import React, { Component} from 'react';


import Menu from './components/pages/menu';
import Footer from './components/pages/footer';
class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            	<Menu />
            	{this.props.children}
            	<Footer />
            </div>
        );
    }
}

export default Main;
