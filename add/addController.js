angular.module("curdApp").controller('addController', function ($route,$scope,$http,$routeParams) {
			$scope.addEmployee = function(info){
		$http.post('../curd-system-angular/api/insert.php', info).then(function(response){
			alert("Sucessfully Added Employees");
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
