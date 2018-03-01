"use strict"
import axios from 'axios';

function handlerRender(req, res){
  axios.get('http://localhost:3001/books')
  .then(function(response){
    var myHtml = JSON.stringify(response.data);
    res.render('index',{myHtml});
    })
    .catch(function(err){
      console.log('#Initial Server-side rendering error', err);
    })
}

module.exports = handlerRender;
