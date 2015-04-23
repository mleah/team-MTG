(function() {
	var app = angular.module("app", [
		'ngRoute',  
		'apikey',
    'services',
    'weatherControllers'
	]);

	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'partials/main.html'
			}).
			when('/form', {
				templateUrl: 'partials/form.html'
			}).
			when('/destination', {
				templateUrl: 'partials/destination.html'
			});
	}]);
})();


