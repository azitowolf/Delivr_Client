'use strict';

(function registerControllerIIFE(ang) {

  var RegisterCtrl = function($http, $routeParams) {
    this.registerForm = {};
    this.registerForm.username = '';
    this.registerForm.password = '';

    this.register = function(formData) {
      $http.post('http://localhost:3000/auth/register', formData).
      success(function(data, status, headers, config) {
        console.log('success');
      }).
      error(function(data, status, headers, config) {
        console.log(headers);
      });
    };

  };

  RegisterCtrl.$inject = ['$http', '$routeParams'];
  angular.module('clientApp').controller('RegisterCtrl', RegisterCtrl);

})(angular);
