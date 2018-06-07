angular.module("curdApp", ['ngRoute']) // ngRoute For Routing dependencies injection
.config(function ($routeProvider) { // creating configration templete
$routeProvider
			.when("/", {
				templateUrl: "home/home.html",
				controller:'homeController'
			})
			.when("/about", {
				templateUrl: "about/about.html"
			})
			.when("/add", {
				templateUrl: "add/add.html",
				controller:'addController'
			})
			.when("/view/:id", {
				templateUrl: "view/view.html",
				controller: 'viewController'
			})
			.when("/edit/:id", {
				templateUrl: "edit/edit.html",
				controller: 'editController'
			})
			.otherwise({
				redirectTo: "/"
			});
});