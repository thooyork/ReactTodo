var React = require('react');
var moment = require('moment');


var Todo = React.createClass({
  render:function(){
    var {id, text, completed, timestamp, timestampCompleted} = this.props;

    var renderDate = () => {

      if (completed){
          return 'completed@:' + moment.unix(timestampCompleted).format('D MMM, YYYY @ HH:mm');
      }
      else{
          return 'created@:' + moment.unix(timestamp).format('D MMM, YYYY @ HH:mm');
      }
    };

    return(
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/>
        {text}
        <h6><small>{renderDate()}</small></h6>

      </div>
    )
  }
});

module.exports = Todo;
