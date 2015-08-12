'use strict';

(function stripeFactoryIIFE() {

  var stripeFactory = function($http, $rootScope) {
    var factory = {};

    factory.createUser = function(token) {
      var url = 'http://localhost:3000/stripe/createUser';
      var data = {
        token: token
      };
      $http.post(url, data).
      success(function(res) {
        console.log(res);
        $rootScope.currentUserStripeToken = res;
      }).
      error(function(data, err) {
        console.log(data);
        console.log(err);
      });

    };

    factory.createUserToken = function(formData) {
      var url = 'http://localhost:3000/stripe/createUserToken';
      var data = formData;
      $http.post(url, data).
      success(function(res) {
        factory.createUser(res.id);
      }).
      error(function(data, err) {
        if (err) {
          console.log(err);
        }
        console.log(data);
      });

    };

    return factory;
  };


  stripeFactory.$inject = ['$http', '$rootScope', '$location'];

  angular.module('clientApp').factory('stripeFactory', stripeFactory);
})();
