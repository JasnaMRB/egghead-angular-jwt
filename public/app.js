(function () {
    'use strict';

    angular.module('jwtApp', [], function config($httpProvider) {
        $httpProvider.interceptors.push(function (AuthTokenFactory) {
            return {
                request: addToken
            };

            function addToken(config) {
                var token = AuthTokenFactory.getToken();
                if (token) {
                    config.headers = config.headers || '';
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            }
        });

    });
})();
