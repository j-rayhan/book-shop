"use strict"
import axios from 'axios';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';

//IMPROT COMBINE REDUCERS
import reducers from './src/reducers/index';
// IMPORT ROUTES
import routes from './src/routes';

function handlerRender(req, res){
  axios.get('http://localhost:3001/books')
  .then(function(response){
    // var myHtml = JSON.stringify(response.data);
    // res.render('index',{myHtml});

    //SETP-1 CREATE A REDUX STORE ON THE SERVER
    const store = createStore(reducers, {"books":{"books":response.data}})
    // SETP-2 GET INITIAL STATE FROM THE STORE
    const initialState = JSON.stringify(store.getState()).replace(/<\/script/g,'<\\/script').replace(/<!--/g,'<\\!--');
    // SETP-3 IMPLEMENT REACT-ROUTER ON THE SERVER TO
    // INTERCEPT CLITENT REQUESTS AND DEFINE WHAT TO DO WITH THEM
    const Routes ={
      routes:routes,
      location: req.url
    }
    match(Routes, function(error, redirect, props){
      if (error) {
        res.status(500).send("#Error fullfilling the requerst")
      } else if (redirect) {
        res.status(302, redirect.pathname + redirect.search)
      } else if(props){
        const reactComponent = renderToString(
          <Provider store={store}>
            <RouterContext {...props}/>
          </Provider>
        )
        res.status(200).render('index', {reactComponent, initialState})
      } else {
        res.status(404).send('Not Found')
      }
    })
    })
    .catch(function(err){
      console.log('#Initial Server-side rendering error', err);
    })
}

module.exports = handlerRender;
