'use strict';

angular.module('yahooWeatherApp').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/cities', {
            template: '<yahoo-wheather-main></yahoo-wheather-main>'
        }).when('/cities/:cityName', {
            template: '<yahoo-wheather-detail></yahoo-wheather-detail>'
        }).otherwise('/cities');
    }
]);
