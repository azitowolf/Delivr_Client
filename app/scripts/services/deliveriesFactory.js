'use strict';

(function deliveriesFactoryIIFE(angular) {

  var deliveriesFactory = function($http, $rootScope, $location, authFactory) {
    var factory = {};

    factory.deliveries = {};

    factory.index = function() {
      var url = 'http://localhost:3000/deliveries/api';
      $http.get(url).
      success(function(data) {
        console.log(data);
        factory.deliveries = data;
      }).
      error(function(data, err) {
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
        console.log(err);
      });
    };

    factory.find = function(id) {
      $http.post('http://localhost:3000/deliveries/api/' + id, formData).
      success(function(data, status, headers, config) {
        $rootScope.currentUser = data.user;
        $rootScope.currentUserName = data.user.username;
        $location.path('/user');
      }).
      error(function(data, status, headers, config) {
        console.log(headers);
      });
    };

    factory.register = function(formData) {
      $http.post('http://localhost:3000/auth/register', formData).
      success(function(data) {
        $rootScope.currentUser = data.user;
        $rootScope.currentUserName = data.user.username;
        $location.path('/user');
      }).
      error(function(data) {
        console.log(headers);
      });
    };

    return factory;
  };

  deliveriesFactory.$inject = ['$http', '$rootScope', '$location', 'authFactory'];

  angular.module('clientApp').factory('deliveriesFactory', deliveriesFactory);
})(angular);
