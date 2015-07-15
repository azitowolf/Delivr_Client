'use strict';

(function stripeFactoryIIFE() {

  var stripeFactory = function() {
    var factory = {};

    factory.createUserToken = function() {
      //do things
    };


    return factory;
  };


  authFactory.$inject = ['$http', '$rootScope', '$location'];

  angular.module('clientApp').factory('stripeFactory', stripeFactory);
})();
