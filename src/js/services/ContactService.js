/**
 * Contact Form Service
 */
angular.module('jobb.ContactService', []).service('ContactService', function($http){

  var Contact = {};

  Contact.post = function (prop) {
    // Message
    var theMessage = [
        'Hej! Jag heter ' + prop.name,
        '' + prop.message,
        ' ',
        '<strong>Jag kan tänka mig jobba:</strong> ' + prop.shift,
        '<strong>Email:</strong> ' + prop.email,
        '<strong>Telefon:</strong> ' + prop.phone
        ].join('<br>');

    $http({
      method: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': JobbConfig.mandrill,
        'message': {
          'from_email': 'no-reply@johnie.se',
          'from_name': 'no-reply@johnie.se',
          'headers': {
            'Reply-To': 'no-reply@johnie.se'
          },
          'subject': JobbConfig.subject,
          'html': theMessage,
          'to': [{
            'email': JobbConfig.email,
            'name': JobbConfig.name,
            'type': 'to'
          }]
        }
      }
    });
  };

  return ( Contact );
});
