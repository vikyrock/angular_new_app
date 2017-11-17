angular
  .module('app')
  .controller('homeCtrl', ['$scope', 'Friends', function($scope, Friends) {
    $scope.title = "we make it live";
	$scope.quote ="we are the professionals";
	
    Friends.get().then(function(data) {
      $scope.friends = data;
    });
    $scope.items = ['home','about','contact'];
    $scope.selectedValue = 'home';

    $scope.save = function() {
      $http.post('/api/friends', friends);
    };
  }]);