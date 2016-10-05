var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');

describe('TodoList',()=>{
  it('Should exist',()=>{
    expect(TodoList).toExist();
  });
});
