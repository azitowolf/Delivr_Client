'use strict';

(function registerControllerIIFE(ang) {

  var UserCtrl = function() {
    this.hideModal = true;


  };

  UserCtrl.$inject = [];
  angular.module('clientApp').controller('UserCtrl', UserCtrl);

})(angular);