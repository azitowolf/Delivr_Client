'use strict';

(function loginControllerIIFE(ang) {

  var LoginCtrl = function($http, $routeParams, $location, $rootScope, authFactory) {
    this.loginForm = {};
    this.loginForm.username = '';
    this.loginForm.password = '';

    this.login = authFactory.login;

  };

  LoginCtrl.$inject = ['$http', '$routeParams', '$location', '$rootScope', 'authFactory'];
  angular.module('clientApp').controller('LoginCtrl', LoginCtrl);

})(angular);
