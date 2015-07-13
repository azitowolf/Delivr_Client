'use strict';

(function authFactoryIIFE() {

  // making a GET to login to return the current users information and inform the global scope
  var authFactory = function($http, $rootScope, $location) {
    var factory = {};

    factory.currentUserName = {};
    factory.currentUserPass = {};

    factory.login = function() {
      var url = 'http://localhost:3000/auth/login';
      $http.get(url).
      success(function(data) {
        console.log(data);
        $rootScope.currentUser = data.user;
        $rootScope.currentUserName = data.user.username;
        $location.path('/user');
      }).
      error(function(data, err) {
        console.error(err);
      });
    };

    factory.logout = function() {
      var url = 'http://localhost:3000/auth/logout';
      console.log(url);
      $http.get(url).
      success(function(data) {
        console.log(data);
        $location.path('/main');
      }).
      error(function(data, err) {
        console.error(err);
      });
    };
    return factory;
  };

  authFactory.$inject = ['$http', '$rootScope', '$location'];

  angular.module('clientApp').factory('authFactory', authFactory);
})();
