angular.module(app.id).controller('mainController', ['$location', '$scope', '$rootScope', function($location, $scope, $rootScope) {

  $scope.homeActive = ($location.path() === '/');
  $scope.membersActive = ($location.path() === '/members');
  $scope.battlesActive = ($location.path() === '/battles');
  $scope.utilsActive = ($location.path() === '/utils');

  $rootScope.$on('$routeChangeSuccess', function(event, current, previous, rejection) {
    $scope.homeActive = false;
    $scope.membersActive = false;
    $scope.battlesActive = false;
    if ($location.path() === '/') {
      $scope.homeActive = true;
      document.title = app.name + ' - Home';
    }
    if ($location.path() === '/members') {
      $scope.membersActive = true;
      document.title = app.name + ' - Members';
    }
    if ($location.path() === '/battles') {
      $scope.battlesActive = true;
      document.title = app.name + ' - Battles';
    }
    if ($location.path() === '/404') {
      document.title = app.name + ' - Not Found';
    }
  });
}]);
