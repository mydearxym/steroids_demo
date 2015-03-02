angular
  .module('example')
  .controller('LearnMoreController', function($scope, supersonic) {
    var self = $scope

    self.navbarTitle = "详细页面#";

    self.logmebtn = "LogMe";

    self.logme = function(){
      supersonic.logger.warn("我被按啦！");
    }

  });
