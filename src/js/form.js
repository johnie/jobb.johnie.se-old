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
    messagesWrapper: $('#formMessages'),
    formFields: {
      message: $('#message'),
      name: $('#name'),
      email: $('#email'),
      phone: $('#phone'),
      shift: $('#shift'),
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

    $('.contact-form__shift').fancySelect();
  };


  /**
   * Validate the form
   */
  contactForm.validate = function () {
    var _self = this,
        responseMessage = _self.messagesWrapper;

    $('#contactForm').validate({
      rules: {
        name: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Vänligen fyll i ditt namn.",
        email: {
          required: "Jag behöver en mailadress för att kunna kontakta dig.",
          email: "Din Email måste vara i formatet namn@domän.com"
        }
      },
      submitHandler: function() {
        _self.sendForm();
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
      var shift = formFields.shift.val();

      // Message
      var theMessage = [
          'Hej! Jag heter ' + name,
          '' + msg,
          ' ',
          '<strong>Jag kan tänka mig jobba:</strong> ' + shift,
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
            }]
          }
        }
      });
    });
  };


  /**
   * Init contactForm()
   */
  contactForm.init = function () {
    this.expand();
    this.validate();
  };

  $(document).ready(function () {
    contactForm.init();
  });
})();
