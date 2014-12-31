;(function () {
  /**
   * Check for no-js class
   */
  var noJS = {
    init: function () {
      this.check('no-js');
    },
    check: function (classie) {
      if ( $('html').hasClass(classie) || $('body').hasClass(classie) ) {
        $('html').removeClass(classie);
      }
    }
  };

  /**
   * Greetings
   */
  var el, hours;
  if (document.querySelector) {
    el = document.querySelector('h2 span');
    hours = (new Date).getHours();
    if (hours >= 12) {
      el.innerHTML = (hours > 17 ? 'God Kväll! ' : 'God Eftermiddag! ');
    }
  }

  /**
   * Simple spam protection
   */
  $(function() {
    noJS.init();

    $('.spam-email').each(function(i) {
      var protectedEmail;
      protectedEmail = $(this).html();
      protectedEmail = protectedEmail.replace(' [at] ', '@');
      protectedEmail = protectedEmail.replace(' [dot] ', '.');
      $(this).html(protectedEmail).replaceWith('<a href=\'mailto:' + $(this).text() + '\'>' + $(this).text() + '</a>');
    });
  });

  /**
   * Reel them in
   */
  var logMsg = [
        ' ',
        '• Gillar du att titta under huven? Här hittar du koden http://crip.se/jobb_github',
        '• Kodar du, så tror jag du skulle passa perfekt! Maila mig vetja! johnie@hjelm.im',
        ' '
      ].join('\n');
  function colorTrace(msg, color) {
    var is_chrome = /chrome/i.test( navigator.userAgent );
    if (is_chrome) {
      console.log('%c' + msg, 'color:' + color + ';font-weight:bold; font-size:9pt;');
    } else {
      console.log(msg);
    }
  }
  colorTrace(logMsg, '#29ba9c');
})();
