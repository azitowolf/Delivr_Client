'use strict';

(function registerControllerIIFE(ang) {

  var UserCtrl = function(authFactory, deliveriesFactory) {
    this.createDeliveryForm = {};

    this.createDeliveryForm.user = authFactory.currentUser._id;

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


    this.currentUser = authFactory.currentUser;
    this.postDelivery = deliveriesFactory.post;
    this.getDeliveries = deliveriesFactory.index;
    this.deliveries = deliveriesFactory.deliveries;

    this.getDeliveries();

  };

  UserCtrl.$inject = ['authFactory', 'deliveriesFactory'];
  angular.module('clientApp').controller('UserCtrl', UserCtrl);

})(angular);
