(function() {
    'use strict';
    angular.module('jwtApp')
        .factory('AuthInterceptor', AuthInterceptor);

    AuthInterceptor.$inject = ['AuthTokenFactory'];

    function AuthInterceptor(AuthTokenFactory) {
        return {
            request: addToken
        };

        function addToken(config) {
            var token = AuthTokenFactory.getToken();
            if (token) {
                config.headers = config.header || '';
                config.headers.Authorization = 'Bearer ' + token;
            }
            return config;
        }
    }

})();