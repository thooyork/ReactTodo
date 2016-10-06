var $ = require('jQuery');

module.exports = {
    setTodos: function(todos){
        if($.isArray(todos)){
          localStorage.setItem('todos',JSON.stringify(todos));
          return todos;
        }
    },
    getTodos:function(){
      var strTodos = localStorage.getItem('todos');
      var todos = [];
      try{
        todos = JSON.parse(strTodos);
      }
      catch(e){

      }
      return $.isArray(todos) ? todos : [];
    }
};
