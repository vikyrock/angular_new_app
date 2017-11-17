// forms controller
angular
  .module('app')
  .cotroller('myCtrl', function($scope){
	  $scope.sendForm = function() {
        $scope.msg = 'Form Submited Successfully';
      };

      $scope.getClass = function(color) {
        return color.toString();
      }
    
 
  
  }]);