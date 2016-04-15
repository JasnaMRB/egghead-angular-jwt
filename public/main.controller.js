(function () {
    'use strict';
    angular.module('jwtApp')
        .controller('MainController', MainController);

    MainController.$inject = ['RandomUserFactory', 'UserFactory'];

    function MainController(RandomUserFactory, UserFactory) {
        var vm = this;
        vm.getRandomUser = getRandomUser();
        vm.login = login;

        function getRandomUser() {
            RandomUserFactory.getUser().then(function success(response) {
vm.randomUser = response.data;
            });
        }

        function login(username, password) {
            UserFactory.login(username, password).then(function success(response) {
                vm.user = response.data;
            }, handleError);

        }
        function handleError(response) {
            alert('Error: ' + response.data);
        }
    }

})();