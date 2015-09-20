/**
 * config.js
 * Global accessible variables
 * Don't forget to rename it to 'config.js'
 */
;(function () {
  var JobbConfig = JobbConfig || {

    name: '',
    email: '',
    mandrill: '',
    subject: ''

  };

  window.JobbConfig = JobbConfig;
})(window);
