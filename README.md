# jobb.johnie.se

> Career site for working with me as my personal helper

## Getting started

```bash
$ npm install
$ bower install
$ gulp
```

**Don't forget to add the config.js file**

```javascript
// ./src/js/config.js
;(function () {
  var JobbConfig = JobbConfig || {

    name: 'Johnie Hjelm',
    email: 'johnie@hjelm.im',
    mandrill: 'Your mandrill-key'

  };

  window.JobbConfig = JobbConfig;
})(window);
```

### Licence

[MIT](/LICENCE) © [Johnie](http://johnie.se)
