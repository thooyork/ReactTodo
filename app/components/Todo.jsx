var React = require('react');
var moment = require('moment');


var Todo = React.createClass({
  render:function(){
    var {id, text, completed, timestamp, timestampCompleted} = this.props;
    var todoClassName = completed ? 'todo  todo-completed' : 'todo';
    var renderDate = () => {

      if (completed){
          return 'completed@:' + moment.unix(timestampCompleted).format('D MMM, YYYY @ HH:mm');
      }
      else{
          return 'created@:' + moment.unix(timestamp).format('D MMM, YYYY @ HH:mm');
      }
    };

    return(
      <div className={todoClassName} onClick={() => {
          this.props.onToggle(id);
        }}>
        <div><input type="checkbox" checked={completed}/></div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
});

module.exports = Todo;
