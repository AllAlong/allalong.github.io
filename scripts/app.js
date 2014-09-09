(function() {
  angular.module('allalong', ['ngRoute', 'allalong_controllers'])
    .config(function($locationProvider, $routeProvider) {
      // $locationProvider.html5Mode(true);
      $routeProvider
        .when('/', { templateUrl: 'views/home.html', controller: 'homeController', controllerAs: 'home' })
        .when('/sentry_as', { templateUrl: 'views/sentry_as.html', controller: 'sentryAsController', controllerAs: 'sentryAs'});
      $routeProvider.otherwise('/');
    });
})();
