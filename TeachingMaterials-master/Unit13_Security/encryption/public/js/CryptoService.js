/**
 * Created by I51115 on 4/16/2016.
 */
(function () {
    'use strict';

    function CryptoService($http) {
        return {
            getSupportedCiphers: getSupportedCiphers,
            encrypt: encrypt,
            decrypt: decrypt
        };

        function getSupportedCiphers() {
            return $http.get("/supportedCiphers");
        }

        function encrypt(plainText, algorithm, key) {
            return $http.post("/encrypt", {
                message: plainText,
                algorithm: algorithm,
                key: key
            });
        }

        function decrypt(cipherText, algorithm, key) {
            return $http.post("/decrypt", {
                message: cipherText,
                algorithm: algorithm,
                key: key
            });
        }
    }

    angular
        .module("encryptApp")
        .factory("CryptoService", ["$http", CryptoService]);
}());