angular.module(app.id).controller('membersController', ['$scope', '$http', function($scope, $http) {
  $scope.members = [];
  $http({ method: 'GET', url: '././datas/members.json'})
    .success(function(datas) {
      $scope.members = datas;
    })
    .error(function(err) {
      console.log(err);
    });
}]);
