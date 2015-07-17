'use strict';

(function authFactoryIIFE() {

  var authFactory = function($http, $rootScope, $location) {
    var factory = {};

    factory.currentUser = {};

    //Ensuring sessions - this is a .run function
    factory.confirmLogin = function() {
      var url = 'http://localhost:3000/auth/login';
      $http.get(url).
      success(function(data) {
        factory.currentUser = data.user;
        $rootScope.currentUser = data.user;
      }).
      error(function(data, err) {
        console.error(data);
        console.error(err);
      });
    };

    factory.logout = function() {
      var url = 'http://localhost:3000/auth/logout';
      $http.get(url).
      success(function(data) {
        factory.currentUser = data.user;
        $rootScope.currentUser = undefined;
        $location.path('/main');
      }).
      error(function(data, err) {
        console.error(data);
        console.error(err);
      });
    };

    factory.login = function(formData) {
      $http.post('http://localhost:3000/auth/login', formData).
      success(function(data) {
        factory.currentUser = data.user;
        $rootScope.currentUser = data.user;
        $location.path('/user');
      }).
      error(function(data, err) {
        console.error(data);
        console.error(err);
      });
    };

    factory.register = function(formData) {
      $http.post('http://localhost:3000/auth/register', formData).
      success(function(data) {
        factory.currentUser = data.user;
        $rootScope.currentUser = data.user;
        $location.path('/user');
      }).
      error(function(data, err) {
        console.error(data);
        console.error(err);
      });
    };



    return factory;
  };

  authFactory.$inject = ['$http', '$rootScope', '$location'];

  angular.module('clientApp').factory('authFactory', authFactory);
})();
