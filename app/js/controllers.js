'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', '$http', function($scope, $http) {
  	$http.get('http://localhost:8080/pruebasMongo/user/listUsers').success(function(data){
  		$scope.users = data;
  		console.log(data);
  	})
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);