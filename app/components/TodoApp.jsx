var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState:function(){
    return {
      showcompleted:false,
      searchtext:'',
      todos:TodoAPI.getTodos()
    }
  },
  componentDidUpdate:function(){
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo:function(text){
    this.setState({
      todos:[
        ...this.state.todos, {id:uuid(),text:text,completed:false,timestamp:moment().unix(),timestampCompleted:undefined}
      ]
    });
  },
  handleToggle:function(id){
    var updatedTodos = this.state.todos.map((todo) =>{
      if (todo.id === id){
        todo.completed = !todo.completed;
        todo.timestampCompleted = todo.completed ? moment().unix() : undefined;
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
    var {todos, showcompleted, searchtext} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showcompleted, searchtext);
    return(
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-4">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
              <TodoAdd onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
