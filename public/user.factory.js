(function() {
    'use strict';

    angular.module('jwtApp')
        .factory('UserFactory', UserFactory);

    UserFactory.$inject = ['$http', 'API_URL'];

    function UserFactory($http, API_URL) {
        return {
            login: login
        };

        function login(username, password) {
            return $http.post(API_URL + "/login", {
                username: username,
                password: password
            });
        }
    }
})();