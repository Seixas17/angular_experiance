'use strict';

angular.
  module('YahooWeatherAPP').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
		when('/cities', {
          template: '<city-list></city-list>'
        }).
		when('/cities/:cityName', {
          template: '<city-detail></city-detail>'
        }).
        otherwise('/cities');
    }
  ]);
