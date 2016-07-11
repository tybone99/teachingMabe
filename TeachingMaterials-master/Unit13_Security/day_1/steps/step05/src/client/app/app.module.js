(function() {
  'use strict';

  angular.module('app', [
      'app.core',
      'app.widgets',
      'app.admin',
      'app.dashboard',
      'app.layout',
      'app.login'
    ])
    .config(function($httpProvider) {
      $httpProvider.interceptors.push(function(principal) {
        return {
          'request': function(config) {
            config.headers.authorization = principal.getToken();
            return config;
          },

          'response': function(response) {
            // nothing to process
            return response;
          }
        };
      });
    });

})();
