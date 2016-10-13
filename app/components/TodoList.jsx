var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';

var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render:function(){
    var {todos, showCompleted, searchtext} = this.props;
    var renderTodos = () => {
      if(todos.length === 0){
          return (
            <div className="notodos">Nothing to do yet.</div>
          );
      }
      else{
          return TodoAPI.filterTodos(todos, showCompleted, searchtext).map((todo)=>{
            return (
              <Todo key={todo.id} {...todo}/>
            );
          });
      }
    };

    return(
      <div>
          {renderTodos()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
