// forms controller
  
  
  
  angular
  .module('app')
  .controller('formCtrl', ['$scope', function($scope) {
     $scope.sendForm = function() {
        $scope.msg = 'Form Submited Successfully';
      }

      $scope.getClass = function(color) {
        return color.toString();
      };
  }]);
  
 var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {
             
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };
 
            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};
 
module.directive("compareTo", compareTo);
