var React = require('react');

var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');

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
  handleAddTodo:function(text){
    alert('new todo:' + text);
  },
  render:function(){
    var {todos} = this.state;
    return(
      <div>
        TodoApp.jsx
        <TodoList todos={todos}/>
        <TodoAdd onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
