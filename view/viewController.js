angular.module("curdApp").controller('viewController', function ($route,$scope,$http,$routeParams) {
			$scope.showEmployee = function(){
		var id = $routeParams.id;
		$http.post('../curd-system-angular/api/view.php',{'id':id}).then(function(response){
			$scope.employees = response.data;
		});
	};
		});
