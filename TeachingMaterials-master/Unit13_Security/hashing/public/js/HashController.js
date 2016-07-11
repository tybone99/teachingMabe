/**
 * Created by I51115 on 4/18/2016.
 */
(function () {
    "use strict";

    function HashController(HashService) {
        var vm = this;
        // Generic Hashing
        vm.supportedHashes = [];
        vm.selectedHash = "";
        vm.message = "How long is the output?";
        vm.hashKey = "password";
        vm.result = "";
        vm.doHash = doHash;
        vm.doSaltHash = doSaltHash;

        // Password hashing
        vm.password = "password";
        vm.iterations = 1000;   // Increase to 100,000 to see a slow-down
        vm.passwordResult = "";
        vm.salt = "";
        vm.doPasswordHash = doPasswordHash;

        init();

        function init() {
            HashService.getSupportedHashes().then(function (response) {
                vm.supportedHashes.splice(0, vm.supportedHashes.length);
                if (response.data) {
                    response.data.forEach(function(eachCipher) {
                        vm.supportedHashes.push(eachCipher);
                    });
                }

                var defaultIndex = vm.supportedHashes.indexOf("sha256");
                if (defaultIndex === -1) {
                    vm.selectedHash = vm.supportedHashes.length === 0 ? null : vm.supportedHashes[0];
                } else {
                    vm.selectedHash = "sha256";
                }
            });
        }

        function doHash() {
            HashService.hash(vm.message, vm.selectedHash, vm.hashKey).then(function (response) {
                vm.result = response.data.result;
            });
        }
        function doSaltHash() {
            HashService.saltyHash(vm.message, vm.selectedHash, vm.hashKey).then(function (response) {
                vm.result = "Digest:\n" + response.data.result + "\nSalt:\n" + response.data.salt;
            });
        }

        function doPasswordHash() {
            HashService.passwordHash(vm.password, vm.selectedHash, vm.iterations).then(function(response) {
                vm.passwordResult = response.data.result;
                vm.salt = response.data.salt;
            });
        }
    }

    angular
        .module("hashApp")
        .controller("HashController", ["HashService", HashController]);
}());