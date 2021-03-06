var expect = require('expect');
var actions = require('actions');

describe('Actions',()=>{
  it('Should generate searchtext action',()=>{
    var action = {
      type:'SET_SEARCH_TEXT',
      searchtext: 'Some search text'
    };

    var res = actions.setSearchText(action.searchtext);

    expect(res).toEqual(action);
  });

  it ('Should generate add todo action', () => {
    var action = {
      type:'ADD_TODO',
      text:'Mein Todo'
    }
    var res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('Should generate toggleShowCompleted action', ()=>{
    var action = {
      type:'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('Should generate toggleTodo action',()=>{
    var action = {
      type:'TOGGLE_TODO',
      id:2
    }
    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });

  it('Should generate addTodos action object',()=>{
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
    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });
});
