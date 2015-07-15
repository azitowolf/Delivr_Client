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
      // var url = 'https://api.postmates.com/v1/customers/cus_JzKcSdV8tU8aDV/delivery_quotes';
      // var encodedAPIKey = base64Factory.encode('8842a99d-8af4-40c2-bde6-78c0378ad879:');
      // var deliveryData = {
      //   dropoff_value: '20 McAllister St, San Francisco, CA 94102',
      //   pickup_address: '101 Market St, San Francisco, CA 94105'
      // };
      // var encodedData = $httpParamSerializer(deliveryData);
      // console.log(encodedData);

      // $http({
      //   method: 'POST',
      //   url: url,
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //     'Authorization': 'Basic ' + encodedAPIKey
      //   },
      //   data: encodedData
      // }).
      // success(function(data) {
      //   console.log(data);
      // }).
      // error(function(data, err) {
      //   console.log(err);
      // });



    };

    return factory;
  };

  postmatesFactory.$inject = ['$http', '$rootScope', '$location', '$httpParamSerializer', 'base64Factory'];

  angular.module('clientApp').factory('postmatesFactory', postmatesFactory);
})(angular);
