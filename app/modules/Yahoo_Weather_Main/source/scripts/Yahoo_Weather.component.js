'use strict';

angular.
  module('yahooWheatherMain').
  component('yahooWheatherMain', {
      templateUrl: './modules/Yahoo_Weather_Main/source/views/Yahoo_Weather.template.html',

      controller: function yahooWheatherMainController($http) {
          var self = this;
          self.orderProp = 'cityName';

          $http.get('./common/assets/mocked_data/Cities_PT.json').then(function (response) {
              self.cities = response.data;
          });
      }
  });
