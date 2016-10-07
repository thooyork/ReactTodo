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
});
