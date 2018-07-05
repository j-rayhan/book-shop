"use strict"
//REACT
import React from 'react';
import {render} from 'react-dom';
import {Router,Route, IndexRoute, browserHistory} from 'react-router';


// IMPORT PAGES
import BooksList from './components/pages/booksList';
import BookForm from './components/pages/bookForm';
import Cart from './components/pages/cart';
import Contact from './components/pages/contact';
import About from './components/pages/about';
import LoginForm from './components/pages/loginForm.js';

import Main from './main';

const routes=(
				<Router history={browserHistory}>
					<Route path="/" component={Main}>
						<IndexRoute component={BooksList} />
						<Route path="/admin" component={LoginForm} />
						<Route path="/cart" component={Cart} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
					</Route>
				</Router>
	);

export default routes;
