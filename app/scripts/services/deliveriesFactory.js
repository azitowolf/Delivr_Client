// 'use strict';

// (function usersFactoryIIFE() {

//   // Create a customers factory
//   var usersFactory = function($http) {
//     var factory = {};
//     factory.user = {};
//     factory.users = [];

//     factory.getUsers = function() {
//       // allow access to the list of customers
//       return $http.get('http://localhost:3000/users/api').success(function(response) {
//         angular.copy(response, factory.customers);
//       });
//     };

//     factory.getUser = function(userId) {
//       return $http.get('http://localhost:3000/customers/api/' + userId).success(function(response) {
//         angular.copy(response, factory.user);
//       });
//     };
//     return factory;
//   };

//   usersFactory.$inject = ['$http'];

//   angular.module('usersApp').factory('customersFactory', customersFactory);
// })();
