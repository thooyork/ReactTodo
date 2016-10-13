var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');
var uuid = require('node-uuid');
var moment = require('moment');

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

  describe('todosReducer', () => {
    it('Should add new Todo',()=>{
      var action = {
        type:'ADD_TODO',
        text:'New Todo'
      }
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);

    });

    it('Should toggle Todo',()=>{
      var todos = [{
         id:2,
         text:'some text',
         completed:false,
         timestamp:moment().unix(),
         timestampCompleted:undefined
       }];

      var action = {
        type:'TOGGLE_TODO',
        id:2
      }

      var res = reducers.todosReducer(df(todos),df(action));

      expect(res[0].completed).toEqual(true);
      expect(res[0].timestampCompleted).toExist();

    });

    it('should add existing todos',()=>{
      var todos = [{
        id:123,
        text:'My Todo',
        completed:false,
        timestampCompleted:undefined,
        timestamp:33000
      }];
      var action = {
        type:'ADD_TODOS',
        todos:todos
      }

      var res = reducers.todosReducer(df([]),df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });

});
