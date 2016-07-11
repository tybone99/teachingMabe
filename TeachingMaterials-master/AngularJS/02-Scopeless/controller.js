(function(){
    'use strict';

    angular.module('basicApp', [])
        .controller('basicController', basicController);

    basicController.$inject = [];

    function basicController() {

        var bc = this;

        // attributes
        bc.sometext = 'sometext';
        bc.name = 'Todd Hale';
        bc.company = 'Xactware';

        // functions
        bc.doSomething = doSomething;
        bc.clearAll = clearAll;

        // function definitions
        function doSomething() {
            bc.sometext = '';
        }

        function clearAll() {

        }
    }

}());
