;(function () {
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
    $('.spam-email').each(function(i) {
      var protectedEmail;
      protectedEmail = $(this).html();
      protectedEmail = protectedEmail.replace(' [at] ', '@');
      protectedEmail = protectedEmail.replace(' [dot] ', '.');
      $(this).html(protectedEmail).replaceWith('<a href=\'mailto:' + $(this).text() + '\'>' + $(this).text() + '</a>');
    });
  });
})();
