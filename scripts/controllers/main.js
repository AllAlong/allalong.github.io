angular.module(app.id).controller('mainController', ['$location', '$scope', '$rootScope', function($location, $scope, $rootScope) {

  $scope.homeActive = ($location.path() === '/');
  $scope.aboutActive = ($location.path() === '/about');
  $scope.teamActive = ($location.path() === '/team');
  $scope.utilsActive = ($location.path() === '/utils');

  $rootScope.$on('$routeChangeSuccess', function(event, current, previous, rejection) {
    $scope.homeActive = false;
    $scope.aboutActive = false;
    $scope.teamActive = false;
    $scope.contactActive = false;
    if ($location.path() === '/') {
      $scope.homeActive = true;
      document.title = app.name + ' - Home';
    }
    if ($location.path() === '/about') {
      $scope.aboutActive = true;
      document.title = app.name + ' - About';
    }
    if ($location.path() === '/team') {
      $scope.teamActive = true;
      document.title = app.name + ' - Members';
    }
    if ($location.path() === '/utils') {
      $scope.utilsActive = true;
      document.title = app.name + ' - Utils';
    }
    if ($location.path() === '/404') {
      document.title = app.name + ' - Not Found';
    }
  });
}]);
