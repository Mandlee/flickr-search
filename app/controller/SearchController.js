/**
 * Created by bence_mandli on 2016. 03. 01..
 */
'use strict';

app.controller('SearchController', ['$scope', '$stateParams', 'HttpService', 'TagService', function ($scope, $stateParams, HttpService, TagService) {
    var vm = this;
    vm.actualPage = 1;
    vm.searchText = $stateParams.searchText;

    //https://www.flickr.com/services/api/flickr.photos.search.html
    $scope.refresh = function () {
        HttpService.get("/rest", {
            method: 'flickr.photos.search',
            text: $stateParams.searchText,
            tags: $stateParams.tag,
            page: vm.actualPage
        }).success(function (data) {
            $scope.results = data.photos;
            vm.totalPages = data.photos.total;
        }).error(function (error) {
            console.error(error);
        });
    };

    $scope.refresh();

}
]);
