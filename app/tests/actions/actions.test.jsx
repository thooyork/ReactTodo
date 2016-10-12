var expect = require('expect');
var actions = require('actions');

describe('Actions',()=>{
  it('Should generate searchtext action',()=>{
    var action = {
      type:'SET_SEARCHTEXT',
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
});
