(function(){
    'use strict';

    angular.module('homeController', [])
        .controller('homeController', homeController);

    homeController.$inject = ['$filter'];

    function homeController($filter) {

        // list everything
        var hc = this;
        hc.costOfToothbrush = 2.00;
        hc.marbleCount = 1522;
        hc.aloneDate = new Date(1990, 11, 25);
        hc.formattedDate=$filter('date')(hc.aloneDate,'yyyy-MM-dd');
        hc.contacts = [
            {name:'Kevin', phone:'847-555-8761'},
            {name:'Buzz', phone:'847-555-8762'},
            {name:'Snakes', phone:'847-555-8763'},
            {name:'Harry', phone:'847-555-8764'},
            {name:'Marv', phone:'847-555-8765'},
            {name:'Mom', phone:'847-555-8766'},
            {name:'Dad', phone:'847-555-8767'},
            {name:'Gus', phone:'847-555-8768'},
            {name:'Uncle Frank', phone:'847-555-8769'}
        ];

    }

}());
