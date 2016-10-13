var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

//var TodoSearch = require('TodoSearch');
import {TodoSearch} from 'TodoSearch';

describe('TodoSearch',()=>{
  it('Should exist',()=>{
    expect(TodoSearch).toExist();
  });

  it('Should dispatch SET_SEARCH_TEXT if Text is entered',() => {
    var searchtext = 'Dog';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.searchtext.value = searchtext;
    TestUtils.Simulate.change(todoSearch.refs.searchtext);

    var action = {
      type:'SET_SEARCH_TEXT',
      searchtext:searchtext
    };
    expect(spy).toHaveBeenCalledWith(action);

  });

  it('Should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked',() => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.showcompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showcompleted);

    var action = {
      type:'TOGGLE_SHOW_COMPLETED'
    }
    expect(spy).toHaveBeenCalledWith(action);
  });
});
