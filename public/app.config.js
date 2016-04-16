(function (){
    'use strict';

    angular.module('jwtApp')
        .config(AppConfig);

    AppConfig.$inject = ['$httpProvider'];

    function AppConfig($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
    }
})();