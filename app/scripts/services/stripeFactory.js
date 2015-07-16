'use strict';

(function stripeFactoryIIFE() {

  var stripeFactory = function() {
    var factory = {};

    factory.createUserToken = function() {
      //do things
    };


    return factory;
  };


  stripeFactory.$inject = ['$http', '$rootScope', '$location'];

  angular.module('clientApp').factory('stripeFactory', stripeFactory);
})();
