'use strict';

(function registerControllerIIFE(ang) {

  var UserCtrl = function() {
    this.registerForm = {};


  };

  UserCtrl.$inject = [];
  angular.module('clientApp').controller('UserCtrl', UserCtrl);

})(angular);
