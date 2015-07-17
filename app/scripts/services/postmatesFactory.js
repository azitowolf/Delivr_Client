'use strict';

(function postmatesFactoryIIFE(angular) {

  var postmatesFactory = function($http, $rootScope, $location, $httpParamSerializer, authFactory) {

    var factory = {};

    factory.getProposal = function(formData) {
      var url = 'http://localhost:3000/postmates/getProposal';
      var currentDelivery = formData;
      var locationA = currentDelivery.locationA;
      var locationB = currentDelivery.locationB;
      var data = {
        userid: authFactory.currentUser._id,
        deliveryid: currentDelivery._id,
        pickup: locationA.street + ', ' + locationA.city + ', ' + locationA.state + ' ' + locationA.zipCode,
        dropoff: locationB.street + ', ' + locationB.city + ', ' + locationB.state + ' ' + locationB.zipCode
      };
      $http.put(url, data)
        .success(function(data) {
          console.log(data);
          $rootScope.currentProposal = data;
        })
        .error(function(data) {
          console.log(data);
        });
    };


    return factory;
  };

  postmatesFactory.$inject = ['$http', '$rootScope', '$location', '$httpParamSerializer', 'authFactory', 'deliveriesFactory'];

  angular.module('clientApp').factory('postmatesFactory', postmatesFactory);
})(angular);
