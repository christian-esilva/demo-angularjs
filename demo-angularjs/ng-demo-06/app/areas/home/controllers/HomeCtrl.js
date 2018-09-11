(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope','$location','CustomerRepository'];

    function HomeCtrl($scope, $location, CustomerRepository) {
        $scope.title = "Clientes Cadastrados";
        $scope.customers = [];

        LoadCustomers();

        function LoadCustomers() {
            var promise = CustomerRepository.getAllCustomers();

            promise.then(
                function (result) {
                    console.log(result);
                    $scope.customers = result.data;
                },
                function (error) {
                    console.log(error);
                });
        }
    }
})();