angular
  .module('geolocation')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here
    var self = $scope;

    self.position = undefined;

    self.getPosition = function() {
      supersonic.device.geolocation.getPosition().then( function(position){
        supersonic.logger.warn("position: ", position);
        self.position = position;
      });
    };

//    self.getPosition = function() {
//      supersonic.ui.dialog.alert("Interstellar!");
//    };

  });
