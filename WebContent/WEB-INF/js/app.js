var App = angular.module('myApp',[]);

App.controller("UserController", function($scope,$http){
	 
	$scope.users=[];
	
     $scope.myForm = {
         id : "",
         name : "",
         email : ""
     };
     
	getInfo();
	
	function getInfo(){
	$http({
	    method : 'GET',
	    url : '/AngularSpringHibernateCrud/user'
	}).then(function successCallback(response) {
	    $scope.users = response.data;
	}, function errorCallback(response) {
	    console.log(response.statusText);
	});
	};
	
	 $scope.remove = function(id) {
         $http({
             method : 'DELETE',
             url : '/AngularSpringHibernateCrud/deleteuser/' +id
         }).then(function successCallback(response) {
     	    getInfo();
     	    clearForm();
     	}, function errorCallback(response) {
     	    console.log(response.statusText);
     	});
     };
     
     $scope.edit = function(u) {
         $scope.myForm.name = u.name;
         $scope.myForm.email = u.email;
         $scope.myForm.id = u.id;
     };
     
     function clearForm() {
         $scope.myForm.name = "";
         $scope.myForm.email = "";
         $scope.myForm.id = "";
     };
     
     $scope.submit = function() {
         var method = "";
         var url = "";
         if ($scope.myForm.id == "") {
             method = "POST";
             url = '/AngularSpringHibernateCrud/adduser';
         } else {
             method = "PUT";
             url = '/AngularSpringHibernateCrud/edituser/' + $scope.myForm.id;
         }
         $http({
             method : method,
             url : url,
             data : angular.toJson($scope.myForm),
         }).then(function successCallback(response) {
      	    getInfo();
      	    clearForm();
      	}, function errorCallback(response) {
      	    console.log(response.statusText);
      	});
     };

});


