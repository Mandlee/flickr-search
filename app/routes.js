/**
 * Created by bence_mandli on 2016. 03. 01..
 */
var appRoutes = angular.module('appRoutes', ['ui.router']);

appRoutes.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('main', {
            url: '/main',
            abstract: true,
            templateUrl: 'view/main.html'
        })
        .state('main.home', {
            url: '/home',
            templateUrl: 'view/pages/home.html'
        })
        .state('main.about', {
            url: '/about',
            templateUrl: 'view/pages/about.html'
        });

    //$locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/main/home');
});