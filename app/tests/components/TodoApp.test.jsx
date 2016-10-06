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
});
