(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['dataservice'];
  /* @ngInject */
  function LoginController(dataservice) {
    var vm = this;
    vm.title = 'Login';
    vm.email = '';
    vm.password = '';

    vm.login = function() {
      return dataservice.authenticate(vm.email, vm.password);
    }
  }
})();
