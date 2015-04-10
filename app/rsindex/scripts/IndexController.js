angular
  .module('rsindex')
  .controller('IndexController', function ($scope, supersonic) {
    // Controller functionality here
    var self = $scope

    self.btnClick = function (arg) {
      supersonic.logger.info("btnClick: " + arg)
//      supersonic.logger.warn("我被按啦！")
      self.clickText = arg
    }

    self.alert = function (arg) {
      ons.notification.confirm({
        message: 'Are you sure you want to continue?'
      });
    }

    ons.createPopover('popover.html').then(function(popover) {
      self.popover = popover;
    })

    self.showPopover = function (ele) {
      supersonic.logger.info(" ele: " + ele)
      self.popover.show(ele)
    }

    self.dialogs = {};
    self.show = function (dlg) {
      supersonic.logger.info("show: " + dlg)

      ons.createDialog(dlg).then(function (dialog) {
        supersonic.logger.info("before show")
        dialog.show();
      }).catch(function (err) {
        supersonic.logger.error("error:", err)
      })
    }

  });

//ons.bootstrap()
//  .controller('DialogController', function ($scope, supersonic) {
//    $scope.dialogs = {};
//
//    $scope.show = function (dlg) {
//      supersonic.logger.info("DialogController show")
//
//      if (!$scope.dialogs[dlg]) {
//        ons.createDialog(dlg).then(function (dialog) {
//          $scope.dialogs[dlg] = dialog;
//          dialog.show();
//        });
//      }
//      else {
//        $scope.dialogs[dlg].show();
//      }
//    }
//  });

