/**
 * Created by I51115 on 4/18/2016.
 */
(function () {
    "use strict";

    function HashService($http) {
        return {
            getSupportedHashes: getSupportedHashes,
            hash: hash,
            saltyHash: saltyHash,
            passwordHash: passwordHash
        };

        function getSupportedHashes() {
            return $http.get("/supportedHashes");
        }

        function hash(message, algorithm, key) {
            return $http.post("/hash", {
                message: message,
                algorithm: algorithm,
                key: key
            });
        }

        function saltyHash(message, algorithm, key) {
            return $http.post("/saltyHash", {
                message: message,
                algorithm: algorithm,
                key: key
            });
        }

        function passwordHash(password, algorithm, iterations) {
            return $http.post("/passwordHash", {
                password: password,
                algorithm: algorithm,
                iterations: iterations
            });
        }
    }

    angular
        .module("hashApp")
        .factory("HashService", ["$http", HashService]);
}());