var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp',()=>{
  it('Should exist',()=>{
    expect(TodoApp).toExist();
  });

  it('should add todo to Todo state on hanldeAddToto', ()=>{
    var itemText = 'New Item Test';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(itemText);

    expect(todoApp.state.todos[0].text).toBe(itemText);
    expect(todoApp.state.todos[0].timestamp).toBeA('number');
  });

  it('should toggle copleted value when handleToggle called',()=>{
    var todoData = {
      id:11,
      text:'Test features',
      completed:false,
      timestamp:0,
      timestampCompleted:undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].timestampCompleted).toBeA('number');
  });


  it('should remove timestampCompleted when toggled from true to false',()=>{
    var todoData = {
      id:11,
      text:'Test features',
      completed:true,
      timestamp:0,
      timestampCompleted:14124578
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[todoData]});

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].timestampCompleted).toBe(undefined);
  });

});
