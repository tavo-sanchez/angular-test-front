'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', '$http', function($scope, $http) {
  	$http.get('http://localhost:8080/pruebasMongo/user/listUsers').success(function(data){
  		$scope.users = data;
  		console.log(data);
  	})
  }])
  .controller('MyCtrl2', ['$scope', '$http', function($scope, $http) {
  	
  	$scope.creaUsuario = function(){
  		$http.post('http://localhost:8080/pruebasMongo/user/createUser',
  			{
  				'lastName': $scope.lastName,
  				'userName':$scope.userName,
  				'name': $scope.name,
  				'password': $scope.password,
  				'email': $scope.email
  			}
  		).success(function(data){
  			console.log(data);
  			$scope.isOK = data.success
  			if(!$scope.isOK)
  				window.location.href('/view2');
  			else
  				console.log("No hago nada");
  	})
  }}]);