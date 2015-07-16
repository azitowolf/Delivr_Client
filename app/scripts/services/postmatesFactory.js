'use strict';

(function postmatesFactoryIIFE(angular) {

  var postmatesFactory = function($http, $rootScope, $location, $httpParamSerializer, base64Factory) {
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
        message: 'hello'
      };
      $http.post(url, data)
        .success(function(data) {
          console.log(data);
        })
        .error(function(data) {

        });


    };

    return factory;
  };

  postmatesFactory.$inject = ['$http', '$rootScope', '$location', '$httpParamSerializer', 'base64Factory'];

  angular.module('clientApp').factory('postmatesFactory', postmatesFactory);
})(angular);
