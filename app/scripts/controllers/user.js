'use strict';

(function registerControllerIIFE(ang) {

  var UserCtrl = function(authFactory, deliveriesFactory, postmatesFactory) {
    this.createDeliveryForm = {};

    this.createDeliveryForm.description = '';
    this.createDeliveryForm.status = 'created';
    this.createDeliveryForm.price = 0;
    this.createDeliveryForm.deliveryTime = '';

    this.createDeliveryForm.locationA = {};
    this.createDeliveryForm.locationA.street = '';
    this.createDeliveryForm.locationA.city = '';
    this.createDeliveryForm.locationA.state = '';
    this.createDeliveryForm.locationA.zipCode = '';


    this.createDeliveryForm.locationB = {};
    this.createDeliveryForm.locationB.street = '';
    this.createDeliveryForm.locationB.city = '';
    this.createDeliveryForm.locationB.state = '';
    this.createDeliveryForm.locationB.zipCode = '';


    this.currentUser = authFactory.currentUser;
    this.postDelivery = deliveriesFactory.addDelivery;
    this.getDeliveries = deliveriesFactory.index;
    this.deliveries = deliveriesFactory.deliveries;
    this.getPostmatesProposal = postmatesFactory.getProposal;
    this.currentProposal = postmatesFactory.currentProposal;

  };

  UserCtrl.$inject = ['authFactory', 'deliveriesFactory', 'postmatesFactory'];
  angular.module('clientApp').controller('UserCtrl', UserCtrl);

})(angular);
