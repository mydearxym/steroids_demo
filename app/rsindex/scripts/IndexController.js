angular
  .module('rsindex')
  .controller('IndexController', function ($scope, supersonic) {
    // Controller functionality here
    var self = $scope

    self.items = [1,2,3,4,5]


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

  })
  .directive('affixWithinContainer', function($document, $ionicScrollDelegate) {

    var transition = function(element, dy, executeImmediately) {
      element.style[ionic.CSS.TRANSFORM] == 'translate3d(0, -' + dy + 'px, 0)' ||
      executeImmediately ?
        element.style[ionic.CSS.TRANSFORM] = 'translate3d(0, -' + dy + 'px, 0)' :
        ionic.requestAnimationFrame(function() {
          element.style[ionic.CSS.TRANSFORM] = 'translate3d(0, -' + dy + 'px, 0)';
        });
    };

    return {
      restrict: 'A',
      require: '^$ionicScroll',
      link: function($scope, $element, $attr, $ionicScroll) {
        var $affixContainer = $element.closest($attr.affixWithinContainer) || $element.parent();

        var top = 0;
        var height = 0;
        var scrollMin = 0;
        var scrollMax = 0;
        var scrollTransition = 0;
        var affixedHeight = 0;
        var updateScrollLimits = _.throttle(function(scrollTop) {
          top = $affixContainer.offset().top;
          height = $affixContainer.outerHeight(false);
          affixedHeight = $element.outerHeight(false);
          scrollMin = scrollTop + top;
          scrollMax = scrollMin + height;
          scrollTransition = scrollMax - affixedHeight;
        }, 500, {
          trailing: false
        });

        var affix = null;
        var unaffix = null;
        var $affixedClone = null;
        var setupAffix = function() {
          unaffix = null;
          affix = function() {
            $affixedClone = $element.clone().css({
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0
            });
            $($ionicScroll.element).append($affixedClone);

            setupUnaffix();
          };
        };
        var cleanupAffix = function() {
          $affixedClone && $affixedClone.remove();
          $affixedClone = null;
        };
        var setupUnaffix = function() {
          affix = null;
          unaffix = function() {
            cleanupAffix();
            setupAffix();
          };
        };
        $scope.$on('$destroy', cleanupAffix);
        setupAffix();

        var affixedJustNow;
        var scrollTop;
        $($ionicScroll.element).on('scroll', function(event) {
          scrollTop = (event.detail || event.originalEvent && event.originalEvent.detail).scrollTop;
          updateScrollLimits(scrollTop);
          if (scrollTop >= scrollMin && scrollTop <= scrollMax) {
            affixedJustNow = affix ? affix() || true : false;
            if (scrollTop > scrollTransition) {
              transition($affixedClone[0], Math.floor(scrollTop-scrollTransition), affixedJustNow);
            } else {
              transition($affixedClone[0], 0, affixedJustNow);
            }
          } else {
            unaffix && unaffix();
          }
        });
      }
    }
  });




