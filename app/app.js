/**
 * Created by bence_mandli on 2016. 03. 01..
 */
'use strict';

var app = angular.module('app', [
    'appRoutes',
    'angular-loading-bar',
    'ui.bootstrap'
]);

app.config(['$httpProvider', 'cfpLoadingBarProvider', function ($httpProvider, cfpLoadingBarProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    //$httpProvider.defaults.withCredentials = true;

    $httpProvider.interceptors.push('HttpInterceptor');

    cfpLoadingBarProvider.includeSpinner = false;
}]);

app.run(['$rootScope', function ($rootScope) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

    });
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

    });
}]);
