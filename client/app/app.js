angular.module('rbk-prep', [
  
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
  //test
    .when('/', {
      templateUrl: 'app/lessons/lessons.html'
    })

    .otherwise('/')
})
