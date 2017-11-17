angular
  .module('app')
  .controller('aboutCtrl', ['$scope', 'Friends', function($scope, Friends) {
    $scope.title = "About Company";
    Friends.get().then(function(data) {
      $scope.items = data;
    });
  }]);