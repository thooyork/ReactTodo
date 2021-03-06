export var setSearchText = (searchtext) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchtext:searchtext
  }
};

export var addTodo = (text) => {
  return {
    type:'ADD_TODO',
    text:text
  }
};

export var toggleShowCompleted = () => {
  return {
    type:'TOGGLE_SHOW_COMPLETED'
  }
};

export var toggleTodo = (id) => {
  return {
    type:'TOGGLE_TODO',
    id:id
  }
};

export var addTodos = (todos) => {
  return {
    type:'ADD_TODOS',
    todos:todos
  }
};
