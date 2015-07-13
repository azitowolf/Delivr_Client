'use strict';

(function navbarControllerIFFE(ang) {
  var NavbarCtrl = function($location) {
    this.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };
  };

  MainCtrl.$inject = ['$location'];
  angular.module('clientApp').controller('NavbarCtrl', NavbarCtrl);

})(angular);
