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
          text:'Walk the dog',
          completed:false
        },
        {
          id:uuid(),
          text:'clean yard.',
          completed:true
        },
        {
          id:uuid(),
          text:'learn react.',
          completed:false
        },
        {
          id:uuid(),
          text:'and learn it well.',
          completed:false
        }
      ]
    }
  },
  handleAddTodo:function(text){
    this.setState({
      todos:[
        ...this.state.todos, {id:uuid(),text:text,completed:false}
      ]
    });
  },
  handleToggle:function(id){
    var updatedTodos = this.state.todos.map((todo) =>{
      if (todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todos:updatedTodos});
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
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <TodoAdd onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
