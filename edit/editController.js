angular.module("curdApp").controller('editController', function ($route,$scope,$http,$routeParams) {
		$scope.showEmployee = function(){
		var id = $routeParams.id;
		$http.post('../curd-system-angular/api/view.php',{'id':id}).then(function(response){
			var emp  = response.data;
			$scope.employee = emp[0];
		});
	};
		$scope.updateEmployee = function(info){
		$http.post('../curd-system-angular/api/update.php', info).then(function(response){
			alert("Records updated Sucessfully")
			window.location.href = '../curd-system-angular/';
		});
	};
		});
angular.module('curdApp').directive("datepicker", function () {
  return {
    restrict: "A",
    require: "ngModel",
    link: function (scope, elem, attrs, ngModelCtrl) {
      var updateModel = function (dateText) {
        scope.$apply(function () {
          ngModelCtrl.$setViewValue(dateText);
        });
      };
      var options = {
        dateFormat: "yy-mm-dd",
        onSelect: function (dateText) {
          updateModel(dateText);
        }
      };
      elem.datepicker(options);
    }
  }
});
