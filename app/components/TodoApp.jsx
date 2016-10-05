var React = require('react');

var TodoList = require('TodoList');


var TodoApp = React.createClass({
  getInitialState:function(){
    return {
      todos:[
        {
          id:1,
          text:'Walk the dog'
        },
        {
          id:2,
          text:'clean yard.'
        },
        {
          id:3,
          text:'learn react.'
        },
        {
          id:4,
          text:'and learn it well.'
        }
      ]
    }
  },
  render:function(){
    var {todos} = this.state;
    return(
      <div>
        TodoApp.jsx
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
