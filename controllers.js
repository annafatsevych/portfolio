var myControllers = angular.module('myControllers', []);

myControllers.controller('MyController', ['$scope', '$http'], function($scope, $http) {

  $scope.author = {
    'name':'Anna',
    'title':'Whatever'
  }

  });


