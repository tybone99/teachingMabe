/**
 * Created by I51115 on 4/16/2016.
 */
(function () {
    'use strict';

    function CryptoController(CryptoService) {
        var vm = this;
        vm.cipherChoices = [];
        vm.selectedCipher = null;
        // Encryption
        vm.plainTextIn = "";
        vm.encryptKey = "";
        vm.cipherTextOut = "";
        vm.encryptPlainText = encryptPlainText;
        // Decryption
        vm.cipherTextIn = "";
        vm.decryptKey = "";
        vm.plainTextOut = "";
        vm.decryptCipherText = decryptCipherText;

        init();

        function init() {
            CryptoService.getSupportedCiphers().then(function (response) {
                vm.cipherChoices.splice(0, vm.cipherChoices.length);
                if (response.data) {
                    response.data.forEach(function(eachCipher) {
                        vm.cipherChoices.push(eachCipher);
                    });
                }

                var defaultIndex = vm.cipherChoices.indexOf("aes-256-cbc");
                if (defaultIndex === -1) {
                    vm.selectedCipher = vm.cipherChoices.length === 0 ? null : vm.cipherChoices[0];
                } else {
                    vm.selectedCipher = "aes-256-cbc";
                }
            });
        }

        function encryptPlainText() {
            CryptoService.encrypt(vm.plainTextIn, vm.selectedCipher, vm.encryptKey)
                .then(function(response) {
                vm.cipherTextOut = response.data.result;
            });
        }

        function decryptCipherText() {
            CryptoService.decrypt(vm.cipherTextIn, vm.selectedCipher, vm.decryptKey)
                .then(function (response) {
                    vm.plainTextOut = response.data.result;
                }, function (response) {
                    vm.plainTextOut = "ERROR: " + response.data.result;
                });
        }
    }


    angular
        .module("encryptApp")
        .controller("CryptoController", ["CryptoService", CryptoController]);
}());