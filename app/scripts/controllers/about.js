'use strict';

(function aboutControllerIFFE(ang) {
  var AboutCtrl = function() {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  };

  angular.module('clientApp').controller('AboutCtrl', AboutCtrl);

})(angular);
