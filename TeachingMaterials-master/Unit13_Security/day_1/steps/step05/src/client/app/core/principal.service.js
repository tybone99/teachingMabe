(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('principal', PrincipalService);

  PrincipalService.$inject = [];
  /* @ngInject */
  function PrincipalService() {
    var service = {
      setToken: setToken,
      getToken: getToken
    };

    return service;

    this.token = '';

    function setToken(token) {
      this.token = token;
    }

    function getToken() {
      return this.token;
    }
  }
})();
