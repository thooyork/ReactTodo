var React = require('react');

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
