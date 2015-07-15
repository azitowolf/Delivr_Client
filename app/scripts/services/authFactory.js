'use strict';

(function authFactoryIIFE() {

  // making a GET to login to return the current users information and inform the global scope
  var authFactory = function($http, $rootScope, $location) {
    var factory = {};

    factory.currentUser = {};

    factory.confirmLogin = function() {
      var url = 'http://localhost:3000/auth/login';
      $http.get(url).
      success(function(data) {
        factory.currentUser = data.user;
        $rootScope.currentUserName = data.user.username;
        $location.path('/user');
      }).
      error(function(headers) {
        console.log(headers);
      });
    };

    factory.logout = function() {
      var url = 'http://localhost:3000/auth/logout';
      console.log(url);
      $http.get(url).
      success(function(data) {
        factory.currentUser = data.user;
        $rootScope.currentUserName = undefined;
        $location.path('/main');
      }).
      error(function(data, err) {
        console.error(err);
      });
    };

    factory.login = function(formData) {
      $http.post('http://localhost:3000/auth/login', formData).
      success(function(data, status, headers, config) {
        factory.currentUser = data.user;
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
        factory.currentUser = data.user;
        $rootScope.currentUserName = data.user.username;
        $location.path('/user');
      }).
      error(function(data) {
        console.log(headers);
      });
    };

    return factory;
  };

  authFactory.$inject = ['$http', '$rootScope', '$location'];

  angular.module('clientApp').factory('authFactory', authFactory);
})();
