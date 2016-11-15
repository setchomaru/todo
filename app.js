angular.module('TodoApp',[])
    .service('TodoService', function(){
      var self = this

      self.todos  = [
        {title:'testComplete',done:true},
        {title:'test',done:false}
    ]

      self.list = function () {
        return self.todos
      }

      self.add = function (todo) {
        self.todos.push(todo);
      }

    })

    .controller('AddTodoController', function ($scope, TodoService) {
          $scope.title = ''
          $scope.add = function () {
            if($scope.title !== ''){
              var todo = {
                title: $scope.title,
                done: false
              }
              TodoService.add(todo)
              resetForm()
            }
          }

          function resetForm(){
            $scope.title = ''
          }
    })
