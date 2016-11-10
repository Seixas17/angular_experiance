'use strict';

// Register `cityList` component, along with its associated controller and template
angular.
  module('cityList').
  component('cityList', {
      templateUrl: 'Yahoo_Weather/Yahoo_Weather.template.html',

      controller: function CityListController($http) {
          var self = this;
          self.orderProp = 'cityName';

          $http.get('Yahoo_Cities/Cities_PT.json').then(function (response) {
              self.cities = response.data;
          });
      }
  });
