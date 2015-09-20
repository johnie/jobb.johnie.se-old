/**
 * Contact Controller
 */
angular.module('jobb.ContactController', ['jobb.ContactService']).controller('ContactCtrl', function($scope, ContactService){

  /**
   * Store content from form
   */
  $scope.formData = {};

  /**
   * Error messages
   */
  $scope.errorMessages = {
    name: 'Vänligen fyll i ditt namn',
    email: 'Din Email måste vara i formatet namn@domän.com'
  }

  $scope.isFocused = function ($event) {
    $scope.showForm = true;

    var element = $(document.activeElement);

    if(element.attr('id') === 'message') {
      $('html, body').animate({
        scrollTop: parseInt(element.offset().top) - 20 + 'px'
      }, 250);
    }
  }

  /**
   * Send the email
   */
  $scope.processForm = function (isValid) {
    if ( isValid ) {
      ContactService.post($scope.formData);

      if (window.scrollY > $('#formMessages').offset().top) {
        $('html, body').animate({
          scrollTop: parseInt($('#formMessages').offset().top) - 20 + 'px'
        }, 250);
      }

      $scope.submitted = true;
    }
  }

});
