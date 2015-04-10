angular
  .module('example')
  .controller('LearnMoreController', function($scope, supersonic) {
    var self = $scope

    self.navbarTitle = "详细页面#"

    self.title = "貌似有点爽啊2"

    self.logmebtn = "LogMe"

    self.logme = function(){
      supersonic.logger.warn("我被按啦！")
    }

    self.AVTest = function(){

      supersonic.logger.info("AVTest")

      var TestObject = AV.Object.extend("TestObject");
      var testObject = new TestObject();

      testObject.save({app: "iphone simulator"}, {
        success: function(object) {
          supersonic.logger.warn("LeanCloud works!");
        }
      });

    }

    self.login = function () {
      supersonic.logger.info("login")
      supersonic.logger.warn("get username: " +  self.username)
      supersonic.logger.warn("get password: " + self.password)
    }

  })
