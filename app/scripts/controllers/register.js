'use strict';

(function registerControllerIIFE(ang) {

  var RegisterCtrl = function($http, $routeParams, authFactory) {
    this.registerForm = {};
    this.registerForm.username = '';
    this.registerForm.password = '';
    this.registerForm.firstName = '';
    this.registerForm.lastName = '';
    this.registerForm.phoneNumber = '';
    this.registerForm.stripeID = '';

    this.register = authFactory.register;

  };

  RegisterCtrl.$inject = ['$http', '$routeParams', 'authFactory'];
  angular.module('clientApp').controller('RegisterCtrl', RegisterCtrl);

})(angular);
