"use strict"
var express = require('express');
var app = express();
var path = require('path');

const PORT = process.env.PORT || 3000 ;

app.get('../*', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})


app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express server Start on port : '+ PORT);
})