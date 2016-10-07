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
    },
    filterTodos:function(todos, showcompleted, searchtext){
      var filteredTodos = todos;

      //FILTER by showcompleted:
      filteredTodos = filteredTodos.filter((todo)=>{
        //if item is not completed return true!
        //this will keep the item in the array
        return !todo.completed || showcompleted;
      });

      //FILTER by searchtext
      filteredTodos = filteredTodos.filter((todo)=>{
        //if item mtches text return true!
        //this will keep the item in the array
        var text = todo.text.toLowerCase();
        return searchtext.length === 0 || text.indexOf(searchtext) > -1;
      });

      //SORT todos with none-completed first
      filteredTodos.sort((a, b) => {
        //a before b
        if (a.completed === false && b.completed === true){
          return -1;
        }
        //b before a
        else if(a.completed === true && b.completed === false){
          return 1;
        }
        else{
          //leave em untouched
          return 0;
        }
      });

      return filteredTodos;
    }
};
