var expect = require('expect');

var TodoAPI = require('TodoAPI');



describe('TodoAPI',()=>{

  beforeEach(()=>{
    localStorage.removeItem('todos');
  });

  it('Should exist',()=>{
    expect(TodoAPI).toExist();
  });

  describe('SET Todos',()=>{
    it('should set valid Todos Array',()=>{
      var todos = [{
        id:23,
        text:'My Item',
        completed:false
      }];

      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid array',()=>{
      var badTodos = {a:'b'};
      TodoAPI.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);

    });
  });

  describe('GET Todos',()=>{
    it('Should return empty array for bad Data',()=>{
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in localstorage',()=>{
      var todos = [{
        id:23,
        text:'My Item',
        completed:false
      }];

      localStorage.setItem('todos',JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });

  describe('FilterTodos',()=>{
    var todos = [{
      id:1,
      text:'some text',
      completed:true
    },{
      id:2,
      text:'other text',
      completed:false
    },{
      id:3,
      text:'some completely other text',
      completed:true
    }];

    it('should return all items if showcompleted is true',()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return only completed items by default',()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status',()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchtext',()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(filteredTodos.length).toBe(2);
    });

    it('should return all todos if searchtext is empty',()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

  });
});
