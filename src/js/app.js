;(function () {
  /**
   * Angular App
   */
  angular.module('jobb', ['jobb.ContactController'])
  /**
   * Main controller
   */
  .controller('JobbController', function($scope) {

    var nightMode = false;

    if (localStorage['isNightMode'] === '' || (localStorage['isNightMode'] == null)) {

      $scope.isNightMode = nightMode;

    } else {

      $scope.isNightMode = JSON.parse(localStorage['isNightMode']);

    }

    $scope.$watch('isNightMode', (function() {

      localStorage['isNightMode'] = JSON.stringify($scope.isNightMode);

    }), true);

    $scope.getAge = function(year, month, day) {
      var now = new Date();
      var age = now.getFullYear() - year;
      var mdif = now.getMonth() - month + 1; //0=jan

      if(mdif < 0) {
        --age;
      }
      else if(mdif === 0) {
        var ddif = now.getDate() - day;

        if(ddif < 0) {
          --age;
        }
      }

      return age;
    }

  });
})(window.angular);
