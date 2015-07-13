'use strict';

(function mainControllerIFFE(ang) {
  var MainCtrl = function($location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };
  };

  MainCtrl.$inject = ['$location'];
  angular.module('clientApp').controller('MainCtrl', MainCtrl);

})(angular);
