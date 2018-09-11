(function () {
    'use strict';

    angular
        .module('app')
        .factory('CustomerRepository', CustomerRepository);

    CustomerRepository.$inject = ['$http'];

    function CustomerRepository($htpp) {
        return {
            getAllCustomers: function () {
                return $htpp.get('app/data/customers.json')
            }
        }
    }
})();