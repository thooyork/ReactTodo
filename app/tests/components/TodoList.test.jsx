var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');


describe('TodoList',()=>{
  it('Should exist',()=>{
    expect(TodoList).toExist();
  });

  it('Should render one Todo Compoment for each Todo Item',()=>{
    var todos = [{id:1,text:'do something'},{id:2,text:'some data'}];
    var todolist = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todolist, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('Should render empty MEssage if no todos',()=>{
    var todos = [];
    var todolist = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todolist, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });
});
