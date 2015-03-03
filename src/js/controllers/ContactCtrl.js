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

  /**
   * Send the email
   */
  $scope.processForm = function (isValid) {
    if ( isValid ) {
      ContactService.post($scope.formData);
      $scope.submitted = true;
    }
  }

});
