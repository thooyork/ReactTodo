var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {TodoAdd} = require('TodoAdd');

describe('TodoAdd',()=>{
  it('Should exist',()=>{
    expect(TodoAdd).toExist();
  });


  it('Should dispatch AddTodo if valid Text is entered', () => {
    var textValue = 'My super new Todo';
    var action = {
      type:'ADD_TODO',
      text:textValue
    };
    var spy = expect.createSpy();
    var todoAddForm = TestUtils.renderIntoDocument(<TodoAdd dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoAddForm));

    todoAddForm.refs.newtodo.value = textValue;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });


  it('Should not dispatch AddTodo if no Text is entered', () => {
    var spy = expect.createSpy();
    var todoAddForm = TestUtils.renderIntoDocument(<TodoAdd dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoAddForm));

    todoAddForm.refs.newtodo.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });


});
