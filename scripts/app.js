angular.module(app.id, ['ngRoute']).config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/wip.html'
  })
  .when('/404', {
    templateUrl: 'views/404.html'
  })
  .when('/members', {
    templateUrl: 'views/members.html'
  })
  .otherwise('/404');
});
