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
      getToken: getToken,
      setRoles: setRoles,
      getRoles: getRoles
    };

    return service;

    this.token = '';

    function setToken(token) {
      this.token = token;
    }

    function getToken() {
      return this.token;
    }

    this.roles = [];

    function setRoles(roles) {
      this.roles = roles;
    }

    function getRoles() {
      return this.roles;
    }
  }
})();
