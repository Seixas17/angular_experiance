'use strict';

// Register `cityDetail` component, along with its associated controller and template
angular.module('cityDetail').component('cityDetail', {
    templateUrl: 'Yahoo_Weather_Details/Yahoo_Weather_Details.template.html',


    controller: ['$routeParams', '$http',
        function CityDetailController($routeParams, $http) {
            var self = this;

            $http.get('https://query.yahooapis.com/v1/public/yql?u=c&q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + $routeParams.cityName + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
                .then
                (
                    function (response) {
                        self.cityInfo = response.data;
                    }
                    ,
                    function errorCallback(response) {

                    }
                );
        }
    ]
})
    .directive('loading', function () {
        return {
            restrict: 'E',
            replace: true,
            template: '<div class="loading"><img src="http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif" width="20" height="20" />LOADING...</div>',
            link: function (scope, element, attr) {
                scope.$watch('loading', function (val) {
                    if (val)
                        $(element).show();
                    else
                        $(element).hide();
                });
            }
        }
    })
;
