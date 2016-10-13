var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoAdd = React.createClass({
  handleSubmit:function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var todo = this.refs.newtodo.value;
    if(todo != ''){
      this.refs.newtodo.value = '';
      //this.props.onAddTodo(todo);
      dispatch(actions.addTodo(todo));
    }
    else{
      this.refs.newtodo.focus();
    }
  },
  render:function(){
    return(
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="newtodo" placeholder="What needs to be done ?"/>
          <input type="submit" value="Add Todo" className="button expanded success"/>
        </form>
      </div>
    );
  }
});

export default connect()(TodoAdd);
