'use strict';

(function navbarControllerIFFE(ang) {
  var NavbarCtrl = function($location) {
    this.isActive = function(viewLocation) {
      console.log($location.path());
      return viewLocation === $location.path();
    };
  };

  NavbarCtrl.$inject = ['$location'];
  angular.module('clientApp').controller('NavbarCtrl', NavbarCtrl);

})(angular);
