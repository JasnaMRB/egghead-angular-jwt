(function() {
    'use strict';

    angular.module('jwtApp')
        .factory('UserFactory', UserFactory);

    UserFactory.$inject = ['$http', 'API_URL', 'AuthTokenFactory', '$log'];

    function UserFactory($http, API_URL, AuthTokenFactory, $log) {
        return {
            login: login,
            logout: logout
        };

        function login(username, password) {
            return $http.post(API_URL + "/login", {
                username: username,
                password: password
            }).then(function success(response) {
                $log.info('[UserFactory] response: ', response);
                AuthTokenFactory.setToken(response.data.token);
                return response;
            });
        }
        function logout() {
            AuthTokenFactory.setToken();
        }
    }
})();