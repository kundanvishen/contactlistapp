function AppCtrl($scope, $http) {
	console.log('Hello World from Controller');

	$http.get('/contactlist').success(function(response) {
		console.log('I got the data I requested');
		$scope.contactlist = response;
	});
	// $scope.contactlist = contactlist;
}