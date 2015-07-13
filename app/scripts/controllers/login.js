'use strict';

(function loginControllerIIFE(ang) {

  var LoginCtrl = function($http, $routeParams, $location, $rootScope) {
    this.loginForm = {};
    this.loginForm.username = '';
    this.loginForm.password = '';

    this.login = function(formData) {
      $http.post('http://localhost:3000/auth/login', formData).
      success(function(data, status, headers, config) {
        $rootScope.currentUser = data;
        $location.path('/user');
      }).
      error(function(data, status, headers, config) {
        console.log(headers);
      });
    };

  };

  LoginCtrl.$inject = ['$http', '$routeParams', '$location', '$rootScope'];
  angular.module('clientApp').controller('LoginCtrl', LoginCtrl);

})(angular);
