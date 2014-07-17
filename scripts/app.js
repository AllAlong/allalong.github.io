angular.module(app.id, ['ngRoute']).config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/wip.html'
  })
  .when('/404', {
    templateUrl: 'views/404.html'
  })
  .when('/channels', {
    templateUrl: 'views/channels.html'
  })
  .when('/members', {
    templateUrl: 'views/members.html'
  })
  .when('/member/:id', {
    templateUrl: 'views/member.html'
  })
  .when('/competitions', {
    templateUrl: 'views/battles.html'
  })
  .when('/discuss', {
    templateUrl: 'views/discuss.html'
  })
  .when('/dashboard', {
    templateUrl: 'views/dashboard.php'
  })
  .otherwise('/404');
});
