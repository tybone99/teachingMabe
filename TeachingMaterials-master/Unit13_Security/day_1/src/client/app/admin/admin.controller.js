(function() {
  'use strict';

  angular
    .module('app.admin')
    .controller('AdminController', AdminController);

  AdminController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function AdminController($q, dataservice, logger) {
    var vm = this;
    vm.title = 'Admin';

    activate();

    function activate() {
      var promises = [getAdmin()];
      return $q.all(promises).then(function() {
        logger.info('Activated Admin View');
      });
    }

    function getAdmin() {
      return dataservice.getAdmin().then(function(data) {
        vm.people = data;
        return vm.people;
      })
    }
  }
})();
