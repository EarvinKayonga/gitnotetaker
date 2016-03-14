var React       = require('react'),
    ReactDom    = require('react-dom'),
    Router      = require('react-router').Router,
    routes      = require('./config/routes');
    
    
 ReactDom.render(
     <Router>{routes}</Router>,
     document.getElementById('app')
 )