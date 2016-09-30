var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


//Load foundation CSS FRamework
//require('style!css!foundation-sites/dist/foundation.min.css');
//wird uber sassLoader geladen

$(document).foundation();

//App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
<p>React BoilerPlate</p>,
  document.getElementById('app')
);
