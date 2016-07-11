(function() {
    "use strict";

    angular.module('exampleCustomFilterApp', [])

        .service('MarkService', function() {
            var service = {
                getChecknark: getCheckmark,
                getXmark: getXmark
            };
            return service;

            function getCheckmark() {
                return '\u2713';
            }

            function getXmark() {
                return '\u2718';
            }
        })

        .filter('checkmark', function(MarkService) {
            return function(input) {
                return input ? MarkService.getChecknark() : MarkService.getXmark();
            };
        })

        .controller('MarkController', function() {
            var vm = this;

            vm.checkmarkVar = true;
        });


})();