/**
 * Contact Form Service
 */
angular.module('jobb.ContactService', []).service('ContactService', function($http){

  var Contact = {};

  Contact.post = function (prop) {

    // Get Körkort property
    var korkort = (prop.korkort) ? 'Ja' : 'Nej';

    // Message
    var theMessage = [
        'Hej! Jag heter ' + prop.name,
        '' + prop.message,
        ' ',
        '<strong>Email:</strong> ' + prop.email,
        '<strong>Telefon:</strong> ' + prop.phone,
        '<strong>Körkort:</strong> ' + korkort
        ].join('<br>');

    $http({
      method: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': JobbConfig.mandrill,
        'message': {
          'from_email': 'noreply@johnie.se',
          'from_name': 'noreply@johnie.se',
          'headers': {
            'Reply-To': 'noreply@johnie.se'
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
