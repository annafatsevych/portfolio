var myApp = angular.module('myApp', [
  'ngRoute',
  'myControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/navbar', {
    templateUrl: 'partials/navbar.html',
    controller: 'Mycontroller'
  }).
  otherwise({
    redirectTo: '/navbar'
  });
}]);