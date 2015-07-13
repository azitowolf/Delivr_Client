'use strict';

(function loginControllerIIFE(ang) {

  var LoginCtrl = function($http, $routeParams) {
    this.loginForm = {};
    this.loginForm.username = '';
    this.loginForm.password = '';

    this.user = '';

    this.login = function(formData) {
      $http.post('http://localhost:3000/auth/login', formData).
      success(function(data, status, headers, config) {
        console.log(data);
      }).
      error(function(data, status, headers, config) {
        console.log(headers);
      });
    };

  };

  LoginCtrl.$inject = ['$http', '$routeParams'];
  angular.module('clientApp').controller('LoginCtrl', LoginCtrl);

})(angular);
