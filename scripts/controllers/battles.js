angular.module(app.id).controller('battlesController', ['$scope', '$http', function($scope, $http) {
  $scope.battles = [];
  $scope.predicate = 'team';
  $scope.reverse = false;

  $http({ method: 'GET', url: '././datas/battles.json'})
    .success(function(datas) {
      var i, j, k, battle, date;
      moment.lang((navigator.language || navigator.userLanguage).substr(0, 2));
      for (i =0; i < datas.length; i += 1) {
        date = moment(new Date(datas[i].date)).fromNow();
        battle = {
          date: date, // new Moment(datas[i].date).calendar(),
          warriors: []
        };
        for (j = 0; j < datas[i].teams.length; j += 1) {
          for (k = 0; k < datas[i].teams[j].members.length; k += 1) {
            battle.warriors.push({
              "team": j + 1,
              "name": datas[i].teams[j].members[k].name,
              "count": datas[i].teams[j].members[k].count
            });
          }
        }
        $scope.battles.push(battle);
      }
    })
    .error(function(err) {
      console.log(err);
    });
}]);
