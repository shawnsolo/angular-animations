'use strict'

angular.module('app', [
  'ngRoute',
  'ui.bootstrap',
  'ngAnimate',
  // 'app.global',
  // 'app.dashboard'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({
    redirectTo: '/dashboard'
  });
}]);
