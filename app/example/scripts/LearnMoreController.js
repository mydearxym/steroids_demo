angular
  .module('example')
  .controller('LearnMoreController', function($scope, supersonic) {
    var self = $scope

    self.navbarTitle = "详细页面#";

    self.logmebtn = "LogMe";
    supersonic.logger.warn("Something that probably should not be happening... is happening.");

    self.logme = function(){
      supersonic.logger.warn("我被按啦！");
    }

  });
