/**
 * Created by bence_mandli on 2016. 03. 01..
 */
'use strict';

var app = angular.module('app', [
    'appRoutes'
    //'ui.bootstrap'
]);

app.config(function ($httpProvider, $sceProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.withCredentials = true;

    $httpProvider.interceptors.push('HttpInterceptor');

});

app.run(['$rootScope', function ($rootScope) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

    });
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

    });
}]);
