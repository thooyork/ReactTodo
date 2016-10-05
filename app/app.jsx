var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

//Load foundation CSS FRamework
//require('style!css!foundation-sites/dist/foundation.min.css');
//wird uber sassLoader geladen

$(document).foundation();

//App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
