/**
 * Contact Controller
 */
angular.module('jobb.ContactController', ['jobb.ContactService']).controller('ContactCtrl', function($scope, ContactService){

  /**
   * Store content from form
   */
  $scope.formData = {};

  /**
   * Workshifts
   */
  $scope.workShifts = [
    { value: 'Dagar (07:00-15:00)', content: 'Dagar (07:00-15:00)' },
    { value: 'Kvällar (15:00-22:00)', content: 'Kvällar (15:00-22:00)' },
    { value: 'Helger (enl. överenskommelse)', content: 'Helger (enl. överenskommelse)' },
    { value: 'Alla ovanstående', content: 'Alla ovanstående' }
  ];

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
