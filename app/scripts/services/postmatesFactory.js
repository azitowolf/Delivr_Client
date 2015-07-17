'use strict';

(function postmatesFactoryIIFE(angular) {

  var postmatesFactory = function($http, $rootScope, $location, $httpParamSerializer, authFactory, deliveriesFactory) {

    var factory = {};

    factory.currentProposal = {};

    factory.getProposal = function() {
      var url = 'http://localhost:3000/postmates/getProposal';
      var currentDelivery = authFactory.currentUser.deliveries[authFactory.currentUser.deliveries.length - 1];
      var locationA = currentDelivery.locationA;
      var locationB = currentDelivery.locationB;
      var data = {
        userid: authFactory.currentUser._id,
        deliveryid: currentDelivery._id,
        pickup: locationA[0].street + ', ' + locationA[0].city + ', ' + locationA[0].state,
        dropoff: locationB[0].street + ', ' + locationB[0].city + ', ' + locationB[0].state
      };
      $http.put(url, data)
        .success(function(data) {
          console.log(data);
          $rootScope.currentProposal = data;
        })
        .error(function(data) {

        });
    };


    return factory;
  };

  postmatesFactory.$inject = ['$http', '$rootScope', '$location', '$httpParamSerializer', 'authFactory', 'deliveriesFactory'];

  angular.module('clientApp').factory('postmatesFactory', postmatesFactory);
})(angular);
