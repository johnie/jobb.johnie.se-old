/**
 * Contact form to apply for the job
 */
;(function () {
  var contactForm = contactForm || {};

  /**
   * contactForm config
   */
  contactForm.config = {
    form: '.contact-form',
    textarea: '.contact-form__message',
    expandedClass: 'expanded'
  };

  /**
   * Contact form animation
   */
  contactForm.expand = function () {
    var _self = this;

    $(_self.config.textarea).on('focus', function(e) {
      e.preventDefault();
      // Add class 'expanded' to contact form
      $(_self.config.form).addClass(_self.config.expandedClass);
      // Scroll to the top of the form
      $('body, html').animate({
        scrollTop: $(_self.config.form).offset().top
      });
    });
  };


  /**
   * Init contactForm()
   */
  contactForm.init = function () {
    this.expand();
  }

  $(function () {
    contactForm.init();
  });
})();
