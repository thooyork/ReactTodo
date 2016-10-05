var React = require('react');

var TodoAdd = React.createClass({
  handleSubmit:function(e){
    e.preventDefault();
    var todo = this.refs.newtodo.value;
    if(todo != ''){
      this.refs.newtodo.value = '';
      this.props.onAddTodo(todo);
    }
    else{
      this.refs.newtodo.focus();
    }
  },
  render:function(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="newtodo" placeholder="What needs to be done ?"/>
          <input type="submit" value="Add Todo" className="button expanded primary hollow"/>
        </form>
      </div>
    );
  }
});

module.exports = TodoAdd;
