var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers',()=>{
  describe('searchTextReducer',()=>{
    it('Should set searchtext',()=>{
      var action = {
        type:'SET_SEARCH_TEXT',
        searchtext:'dog'
      };

      var res = reducers.searchTextReducer(df(''),df(action));

      expect(res).toEqual(action.searchtext);
    });
  });

  describe('showCompletedReducer',()=>{
    it('Should toggle showCompleted status',()=>{
      var action = {
        type:'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

});
