angular.module('isolate-scope', [])

    .controller('IsolatedScopeController', function($scope) {
        $scope.name = 'Bill';
        $scope.clickMe = function(param) {
            console.log('I was clicked! Param value = ' + param);
        };
    })

    .directive('customerName', function() {
        return {
            //scope: {
            //    name: '=',
            //    action: '&'
            //},
            //bindToController: true,
            bindToController: {
                dirname: '=',
                action: '&'
            },
            controller: function() {

            },
            controllerAs: 'vm',
            template: '<span>Customer name (from directive): <input ng-model="vm.dirname"/><input type="button" ng-click="vm.action()(123)" value="Click Me!"/></span>'
        };
    });
