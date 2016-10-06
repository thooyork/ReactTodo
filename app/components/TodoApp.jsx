var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');


var TodoApp = React.createClass({
  getInitialState:function(){
    return {
      showcompleted:false,
      searchtext:'',
      todos:[
        {
          id:uuid(),
          text:'Walk the dog'
        },
        {
          id:uuid(),
          text:'clean yard.'
        },
        {
          id:uuid(),
          text:'learn react.'
        },
        {
          id:uuid(),
          text:'and learn it well.'
        }
      ]
    }
  },
  handleAddTodo:function(text){
    this.setState({
      todos:[
        ...this.state.todos, {id:uuid(),text:text}
      ]
    });
  },
  handleSearch:function(showcompleted, searchtext){
    this.setState({
      showcompleted:showcompleted,
      searchtext:searchtext.toLowerCase()
    });
  },
  render:function(){
    var {todos} = this.state;
    return(
      <div>
        <h2>Todo App</h2>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <TodoAdd onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
