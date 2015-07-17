'use strict';

(function postmatesFactoryIIFE(angular) {

  var postmatesFactory = function($http, $rootScope, $location, $httpParamSerializer, authFactory) {
    var factory = {};

    factory.deliveries = {};

    factory.getApiKeys = function() {
      var url = 'http://localhost:3000/auth/';
      $http.get(url).
      success(function(data) {
        console.log(data);
      });
    };

    factory.getProposal = function() {
      var url = 'http://localhost:3000/postmates/getProposal';
      var data = {
        userid: authFactory.currentUser._id,
        deliveryid: authFactory.currentUser.deliveries[authFactory.currentUser.deliveries.length - 1]._id
      };
      $http.put(url, data)
        .success(function(data) {
          console.log(data);
        })
        .error(function(data) {

        });
    };

    return factory;
  };

  postmatesFactory.$inject = ['$http', '$rootScope', '$location', '$httpParamSerializer', 'authFactory'];

  angular.module('clientApp').factory('postmatesFactory', postmatesFactory);
})(angular);
