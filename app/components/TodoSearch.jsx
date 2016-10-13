var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({
  render:function(){
    var {dispatch, showCompleted, searchtext} = this.props;

    return(
      <div className="container__header">
        <div>
            <input onChange={()=>{
                var searchtext = this.refs.searchtext.value;
                dispatch(actions.setSearchText(searchtext));
              }} type="text" ref="searchtext" value={searchtext} placeholder="Search"/>
        </div>
        <div>
          <label htmlFor="filter">
            <input type="checkbox" id="filter" ref="showcompleted" checked={showCompleted} onChange={()=>{
                dispatch(actions.toggleShowCompleted());
              }}/>
            Show completed tasks.
        </label>
        </div>
      </div>
    );
  }
});

export default connect((state)=>{
  return {
    showCompleted:state.showCompleted,
    searchtext:state.searchtext
  }
})(TodoSearch);
