var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoAdd = require('TodoAdd');

describe('TodoAdd',()=>{
  it('Should exist',()=>{
    expect(TodoAdd).toExist();
  });


  it('Should call onAddTodo if valid Text is entered', () => {
    var spy = expect.createSpy();
    var todoAddForm = TestUtils.renderIntoDocument(<TodoAdd onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoAddForm));
    var textValue = 'My super new Todo';
    
    todoAddForm.refs.newtodo.value = textValue;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(textValue);
  });


  it('Should not call onAddTodo if no Text is entered', () => {
    var spy = expect.createSpy();
    var todoAddForm = TestUtils.renderIntoDocument(<TodoAdd onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoAddForm));

    todoAddForm.refs.newtodo.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });


});
