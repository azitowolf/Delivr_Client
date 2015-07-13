'use strict';

(function navbarControllerIFFE(ang) {

  var NavbarCtrl = function($location, authFactory) {
    this.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };
    this.logout = authFactory.logout;

  };

  NavbarCtrl.$inject = ['$location', 'authFactory'];
  angular.module('clientApp').controller('NavbarCtrl', NavbarCtrl);

})(angular);
