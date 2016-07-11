(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger', '$state', 'principal'];
  /* @ngInject */
  function dataservice($http, $q, exception, logger, $state, principal) {
    var service = {
      authenticate: authenticate,
      getPeople: getPeople,
      getMessageCount: getMessageCount,
      getAdmin: getAdmin
    };

    return service;

    function authenticate(email, password) {
      return $http.post('/api/authenticate', {email: email, password: password})
        .then(function(response) {
          console.log(response.data.token);
          principal.setToken(response.data.token);
          $state.go('dashboard');
        })
        .catch(function(error) {
          console.log(error);
        })
    }

    function getMessageCount() { return $q.when(72); }

    function getPeople() {
      return $http.get('/api/people')
        .then(success)
        .catch(fail);
    }

    function getAdmin() {
      return $http.get('/api/admin')
        .then(success)
        .catch(fail);
    }

    function success(response) {
      return response.data;
    }

    function fail(e) {
      console.log(e);
      if (e.status === 403) {
        $state.go('login');
        if (typeof e.data === 'string') {
          var data = e.data;
          e.data = {};
          e.data.msg = data;
          e.data.description = 'Please authenticate. ';
        }
        return exception.catcher('You are not authenticated.')(e);
      }
      return exception.catcher('XHR Failed')(e);
    }
  }
})();
