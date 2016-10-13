var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  switch(action.type){
    case 'SET_SEARCH_TEXT':
      return action.searchtext;
    default:
      return state;
  }
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type){
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};

export var todosReducer = (state = [], action) => {
  switch (action.type){
    case 'ADD_TODO':
      return [
        ...state,
        {
          id:uuid(),
          text:action.text,
          completed:false,
          timestamp:moment().unix(),
          timestampCompleted:undefined
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo)=>{
        if(todo.id === action.id){
          var newCompleted = !todo.completed;
          return {
            ...todo,
            completed:newCompleted,
            timestampCompleted: newCompleted ? moment().unix() : undefined
          };
        }
        else{
          return todo;
        }

      });
    default:
      return state;
  }
};
