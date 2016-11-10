'use strict';

angular.module('yahooWheatherDetail')
    .component('yahooWheatherDetail', {
        templateUrl: './modules/Yahoo_Weather_Details/source/views/Yahoo_Weather_Details.template.html',


        controller: ['$routeParams', '$http', '$location', '$timeout',
            function ($routeParams, $http, $location, $timeout) {
                var self = this;

                self.dataNotLoaded = true;
                self.dataError = false;

                var yql_query = 'select woeid from geo.places(1) where text="' + $routeParams.cityName + ', Portugal"';
                var endpoint_URL = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (' + yql_query + ') and u=\'c\'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'

                var goto_home = function () {
                    $location.path("./cities");
                };

                var success_callback = function (response) {
                    self.dataNotLoaded = false;
                    self.dataError = false;
                    self.cityInfo = response.data;

                    if (self.cityInfo.query.count === 0) {
                        self.dataError = true;

                        $timeout(goto_home, 5000);
                    }
                };

                var error_callback = function (response) {
                    self.dataNotLoaded = false;
                    self.dataError = true;

                    $timeout(goto_home, 5000);
                };

                $http.get(endpoint_URL).then(success_callback, error_callback);
            }
        ]
    })
;