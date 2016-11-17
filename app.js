angular.module('TodoApp',[])
    .service('TodoService', function(){
      var self = this

      self.todos  = [
<<<<<<< HEAD
        {title: "test1", done: true},
          {title: "test2", done: false}]

=======
        {title:'testComplete',done:true},
        {title:'test',done:false}
    ]
>>>>>>> d418975a6ccf5bc421a79755a07d0168d367883d

      self.list = function () {
        return self.todos
      }

      self.add = function (todo) {
        self.todos.push(todo);
      }

<<<<<<< HEAD

    })
    .controller('ListTodoController', function ($scope, TodoService) {
      $scope.todos = TodoService.list();


    })
    .controller('AddTodoController', function ($scope, TodoService) {
         $scope.title = ''
          $scope.add = function () {
         if($scope.title !== ''){

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

          }

          function resetForm(){
            $scope.title = ''
          }
    })
