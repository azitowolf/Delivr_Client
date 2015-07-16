'use strict';

(function deliveriesFactoryIIFE(angular) {

  var deliveriesFactory = function($http, $rootScope, $location, authFactory) {
    var factory = {};

    factory.deliveries = {};

    factory.index = function() {
      var url = 'http://localhost:3000/deliveries/api';
      $http.get(url).
      success(function(data) {
        factory.deliveries = data;
      }).
      error(function(data, err) {
        console.log(data);
        console.log(err);
      });
    };

    factory.post = function(formData) {
      var url = 'http://localhost:3000/deliveries/api';
      $http.post(url, formData).
      success(function(data) {
        console.log(data);
        authFactory.addDelivery(data);
      }).
      error(function(data, err) {
        console.log(data);
        console.log(err);
      });
    };

    factory.find = function(id) {
      $http.get('http://localhost:3000/deliveries/api/' + id).
      success(function(data) {
        $rootScope.currentUser = data.user;
        $rootScope.currentUserName = data.user.username;
        $location.path('/user');
      }).
      error(function(data, err) {
        console.log(data);
        console.log(err);
      });
    };

    return factory;
  };

  deliveriesFactory.$inject = ['$http', '$rootScope', '$location', 'authFactory'];

  angular.module('clientApp').factory('deliveriesFactory', deliveriesFactory);
})(angular);
