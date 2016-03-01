/**
 * Created by bence_mandli on 2016. 03. 01..
 */
'use strict';

app.controller('MainController', ['$scope', '$state', 'HttpService', function ($scope, $state, HttpService) {
    var vm = this;
    vm.Config = Config;
    vm.searchText = '';

    /**
     * Sets the navbar active item.
     * @param tabState
     * @returns {*}
     * @usage ng-class="isThisTabActive('main.home')
     */
    $scope.isThisTabActive = function (tabState) {
        if ($state.current.name === tabState) {
            return 'active';
        }
        return '';
    };

    //https://www.flickr.com/services/api/flickr.photos.search.html
    $scope.search = function () {
        HttpService.get("/rest", {
            method: 'flickr.photos.search',
            api_key: Config.API_KEY,
            format: 'json',
            text: vm.searchText,
            nojsoncallback: 1
        }).success(function (data) {
            console.log(data);
            $scope.results = data.photos;
        }).error(function (error) {
            console.error(error);
        });
    };

}
]);
