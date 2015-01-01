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
      email: $('#name'),
      phone: $('#name'),
      file: $('#cv'),
      submit: $('#submit')
    }
  };



  /**
   * Contact form animation
   */
  contactForm.expand = function () {
    var _self = this;

    _self.config.textarea.on('focus', function(e) {
      e.preventDefault();
      // Add class 'expanded' to contact form
      _self.config.form.addClass(_self.config.expandedClass);
      // Scroll to the top of the form
      $('body, html').animate({
        scrollTop: $(_self.config.form).offset().top
      });
    });
  };


  /**
   * Send the message
   */
  contactForm.sendForm = function () {
    var _self = this,
        formFields = _self.config.formFields;

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
        'Email: ' + email,
        'Telefon: ' + phone
        ].join('\n');

    // Ajax post
    $('#form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
          'key': JobbConfig.mandrill,
          'message': {
            'from_email': email,
            'from_name': name,
            'headers': {
              'Reply-To': email
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
      }).done(function (response){
        alert('We have sent your message!');
      }).fail(function (response) {
        alert(response);
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

  $(function () {
    contactForm.init();
  });
})();
