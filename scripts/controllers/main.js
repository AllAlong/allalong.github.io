angular.module(app.id).controller('mainController', ['$location', '$scope', '$rootScope', function($location, $scope, $rootScope) {

  $scope.homeActive = ($location.path() === '/');
  $scope.channelsActive = ($location.path() === '/channels');
  $scope.membersActive = ($location.path() === '/members');
  $scope.battlesActive = ($location.path() === '/battles');
  $scope.discussActive = ($location.path() === '/discuss');

  $rootScope.$on('$routeChangeSuccess', function(event, current, previous, rejection) {
    $scope.homeActive = false;
    $scope.channelsActive = false;
    $scope.membersActive = false;
    $scope.battlesActive = false;
    $scope.discussActive = false;
    if ($location.path() === '/') {
      $scope.homeActive = true;
      document.title = app.name + ' - Home';
    }
    if ($location.path() === '/channels') {
      $scope.channelsActive = true;
      document.title = app.name + ' - Channels';
    }
    if ($location.path() === '/members') {
      $scope.membersActive = true;
      document.title = app.name + ' - Members';
    }
    if ($location.path() === '/competitions') {
      $scope.battlesActive = true;
      document.title = app.name + ' - Competitions';
    }
    if ($location.path() === '/discuss') {
      $scope.discussActive = true;
      document.title = app.name + ' - Discuss';
    }
    if ($location.path() === '/404') {
      document.title = app.name + ' - Not Found';
    }
  });
}]);
