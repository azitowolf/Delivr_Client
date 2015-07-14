'use strict';

(function registerControllerIIFE(ang) {

  var UserCtrl = function() {
    this.createDeliveryForm = {};

    this.createDeliveryForm.user = 'currentUser.Id;';

    this.createDeliveryForm.locationA = {};
    this.createDeliveryForm.locationA.street = '';
    this.createDeliveryForm.locationA.city = '';
    this.createDeliveryForm.locationA.state = '';
    this.createDeliveryForm.locationA.zipCode = '';

    this.createDeliveryForm.description = '';

    this.createDeliveryForm.locationB = {};
    this.createDeliveryForm.locationB.street = '';
    this.createDeliveryForm.locationB.city = '';
    this.createDeliveryForm.locationB.state = '';
    this.createDeliveryForm.locationB.zipCode = '';

  };

  UserCtrl.$inject = [];
  angular.module('clientApp').controller('UserCtrl', UserCtrl);

})(angular);
