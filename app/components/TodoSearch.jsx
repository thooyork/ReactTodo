var React = require('react');

var TodoSearch = React.createClass({
  handleSearch:function(){
    var showcompleted = this.refs.showcompleted.checked;
    var searchtext = this.refs.searchtext.value;

    this.props.onSearch(showcompleted, searchtext);
  },
  render:function(){
  return(
    <div>
      <div>
          <input onChange={this.handleSearch} type="text" ref="searchtext" placeholder="Search"/>
      </div>
      <div>
        <label htmlFor="filter">
          <input type="checkbox" id="filter" ref="showcompleted" onChange={this.handleSearch}/>
          Show completed tasks.
      </label>
      </div>
    </div>
    )
  }
});

module.exports = TodoSearch;
