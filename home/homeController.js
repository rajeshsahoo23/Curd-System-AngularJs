angular.module("curdApp").controller('homeController', function ($route,$scope,$http,$routeParams) {
			$scope.getEmployees = function(){
		$http.get('../curd-system-angular/api/viewAll.php').then(function(response){
			$scope.employees = response.data;
		});
	};
		$scope.deleteEmployee = function(id){
		var id = id;
		$http.post('../curd-system-angular/api/delete.php',{'id':id}).then(function(response){
			$route.reload();
		});
	};
		});
