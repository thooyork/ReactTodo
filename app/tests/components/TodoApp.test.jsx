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

  });

  it('should toggle copleted value when handleToggle called',()=>{
    var todoData = {
      id:11,
      text:'Test features',
      completed:false
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
  });
});
