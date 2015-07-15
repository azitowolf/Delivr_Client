'use strict';

(function navbarControllerIFFE(ang) {

  var NavbarCtrl = function($location, authFactory) {

    this.logout = authFactory.logout;

    this.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };


  };

  NavbarCtrl.$inject = ['$location', 'authFactory'];
  angular.module('clientApp').controller('NavbarCtrl', NavbarCtrl);

})(angular);
