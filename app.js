angular.module('ContactApp',[])
  .service('contactService',function(){
    var self = this

    self.contacts= []

    self.list = function() {
      return self.contacts
    }
    self.add = function(contact){
      self.contacts.push(contact)
    }
  })

.controller('ListContactController',function($scope,contactService){

  $scope.contacts =  contactService.list()
  })
  .controller('AddContactContorller',function ($scope,contactService){

      $scope.add = function(){

          var contact  {

            title: $scope.title

          }

        contactService.add(contact)

          resetForm()
        }


    function resetForm()
    {

      $scope.title = ''

    }


});
