(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger', '$state'];
  /* @ngInject */
  function dataservice($http, $q, exception, logger, $state) {
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
      return exception.catcher('XHR Failed for getPeople')(e);
    }
  }
})();
