var React = require('react');

var Todo = require('Todo');


var TodoList = React.createClass({
  render:function(){
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo)=>{
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        );
      });
    };

    return(
      <div>
        <ul className="todo-list">
          {renderTodos()}
        </ul>
      </div>
    )
  }
});

module.exports = TodoList;
