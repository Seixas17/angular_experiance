'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('YahooWeather Application', function () {


    it('should redirect `index.html` to `index.html#!/cities', function () {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toBe('/cities');
    });


    describe('View: City list', function () {

        beforeEach(function () {
            browser.get('index.html#!/cities');
        });


        it('should filter the phone list as a user types into the search box', function () {
            var cityList = element.all(by.repeater('city in $ctrl.cities'));
            var query = element(by.model('ctrl.query.cityName'));
            
            expect(cityList.count()).toBe(306);

            query.sendKeys('Porto');
            expect(cityList.count()).toBe(5);

            query.clear();
        });


    });

});