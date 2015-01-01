/**
 * Contact form to apply for the job
 */
;(function () {
  var contactForm = contactForm || {};


  /**
   * contactForm config
   */
  contactForm.config = {
    form: $('#contactForm'),
    textarea: $('.contact-form__message'),
    expandedClass: 'expanded',
    subject: 'Jag söker jobbet som din assistent',
    formFields: {
      message: $('#message'),
      name: $('#name'),
      email: $('#email'),
      phone: $('#phone'),
      file: $('#cv'),
      submit: $('#submit')
    }
  };


  /**
   * Contact form animation
   */
  contactForm.expand = function () {
    var _self = this,
        form = _self.config.form,
        textarea = _self.config.textarea,
        expandClass = _self.config.expandedClass;

    textarea.on('focus', function(e) {
      e.preventDefault();

      /**
       * Add class 'expanded' to contact form
       * on focus in textarea, if it doesn't already
       * have that class
       */
      if( !form.hasClass(expandClass) ) {
        form.addClass(expandClass);

        // Scroll to the top of the form
        $('body, html').animate({
          scrollTop: $(form).offset().top
        });
      }
    });
  };


  /**
   * Send the message
   */
  contactForm.sendForm = function () {
    var _self = this,
        formFields = _self.config.formFields;

    // Ajax post
    $('#contactForm').submit(function(e) {
      e.preventDefault();

      // Store the fields
      var msg   = formFields.message.val();
      var name  = formFields.name.val();
      var email = formFields.email.val();
      var phone = formFields.phone.val();
      var file  = formFields.file;

      // File input
      if( file.val() !== '') {
        file[0].files[0];
        var reader = new FileReader();
        var fileResult = btoa(event.target.result);
        reader.readAsBinaryString(file);
      }

      // Get file type and name
      var fileType = file.type;
      var fileName = file.name;

      // Message
      var theMessage = [
          'Hej! Jag heter ' + name,
          '' + msg,
          ' ',
          '<strong>Email:</strong> ' + email,
          '<strong>Telefon:</strong> ' + phone
          ].join('<br>');

      $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
          'key': JobbConfig.mandrill,
          'message': {
            'from_email': 'no-reply@johnie.se',
            'from_name': 'no-reply@johnie.se',
            'headers': {
              'Reply-To': 'no-reply@johnie.se'
            },
            'subject': _self.config.subject,
            'html': theMessage,
            'to': [{
              'email': JobbConfig.email,
              'name': JobbConfig.name,
              'type': 'to'
            }],
            'attachements': [{
              'type': fileType,
              'name': fileName,
              'content': fileResult
            }]
          }
        }
      }).success(function (res) {
        console.log(res);
      });
    });
  };


  /**
   * Init contactForm()
   */
  contactForm.init = function () {
    this.expand();
    this.sendForm();
  };

  $(document).ready(function () {
    contactForm.init();
  });
})();
