var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch',()=>{
  it('Should exist',()=>{
    expect(TodoSearch).toExist();
  });

  it('Should call onSearch if Text is entered',() => {
    var searchtext = 'Dog';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.searchtext.value = searchtext;
    TestUtils.Simulate.change(todoSearch.refs.searchtext);

    expect(spy).toHaveBeenCalledWith(false, searchtext);

  });

  it('Should call onSearch with proper checked value',() => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.showcompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showcompleted);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
