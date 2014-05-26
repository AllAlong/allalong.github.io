angular.module(app.id)
  .controller('membersController', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.members = [];
    $http({ method: 'GET', url: '././datas/members.json'})
      .success(function(datas) {
        $scope.members = datas;
      })
      .error(function(err) {
        console.log(err);
      });
    $scope.profil = function(id) {
      $location.path('member/' + id);
    };
  }])
  .controller('memberController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $scope.member = {};

    $http({ method: 'GET', url: '././datas/members.json' })
      .success(function(datas) {
        var i;
        for (i = 0; i < datas.length; i += 1) {
          if (datas[i].id === $routeParams.id) {
            $scope.member = datas[i];
            document.title = app.name + ' - ' + datas[i].name;
            return;
          }
        }
      })
      .error(function(err) {
        console.log(err);
      });
  }]);
