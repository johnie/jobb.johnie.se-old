;(function () {
  angular.module('jobb', []).controller('JobbController', function($scope) {
    var nightMode;
    nightMode = false;
    if (localStorage['isNightMode'] === '' || (localStorage['isNightMode'] == null)) {
      $scope.isNightMode = nightMode;
    } else {
      $scope.isNightMode = JSON.parse(localStorage['isNightMode']);
    }
    $scope.$watch('isNightMode', (function() {
      localStorage['isNightMode'] = JSON.stringify($scope.isNightMode);
    }), true);
  });
})(window.angular);
