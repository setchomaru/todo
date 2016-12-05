angular.module('TodoApp',[])
    .service('TodoService', function(){
      var self = this

      self.todos  = [


        {title:"test1", done: true},
             {title:"test2", done: false}
    ]


  self.list = function () {
        return self.todos
      }

      self.add = function (todo) {
        self.todos.push(todo);
      }


    })
    .controller('ListTodoController', function ($scope, TodoService) {
      $scope.todos = TodoService.list();


    })



    .controller('AddTodoController', function ($scope, TodoService) {
          $scope.title = ''
          $scope.add = function () {


              var todo = {
                title: $scope.title,
                done: $scope.done
              }
                if($scope.title !== ''){
              TodoService.add(todo)

          $scope.done = false
         }

            }


          function resetForm(){
            $scope.title = ''
          }
    })
