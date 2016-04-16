(function () {
    'use strict';
    angular.module('jwtApp')
        .controller('MainController', MainController);

    MainController.$inject = ['RandomUserFactory', 'UserFactory'];

    function MainController(RandomUserFactory, UserFactory) {
        var vm = this;
        vm.getRandomUser = getRandomUser;
        // vm.getRandomUser = getRandomUser() makes the call immediately when you load the page and then never again!
        vm.login = login;
        vm.logout = logout;

        function getRandomUser() {
            RandomUserFactory.getUser().then(function success(response) {
                vm.randomUser = response.data;
            });
        }

        function login(username, password) {
            UserFactory.login(username, password).then(function success(response) {
                vm.user = response.data.user;
            }, handleError);

        }

        function logout() {
            UserFactory.logout();
            vm.user = null;
        }

        function handleError(response) {
            alert('Error: ' + response.data);
        }
    }

})();