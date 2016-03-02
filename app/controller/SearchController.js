/**
 * Created by bence_mandli on 2016. 03. 01..
 */
'use strict';

app.controller('SearchController', ['$scope', '$stateParams', 'HttpService', 'TagService', function ($scope, $stateParams, HttpService, TagService) {
    var vm = this;
    vm.actualPage = 1;

    console.log($stateParams.searchText);

    $scope.refresh = function () {
        HttpService.get("/rest", {
            method: 'flickr.photos.search',
            text: $stateParams.searchText,
            page: vm.actualPage,
            tag: TagService.getTag()
        }).success(function (data) {
            console.log(data);
            $scope.results = data.photos;
            vm.totalPages = data.photos.total; //: 3408
            console.log('pages:', vm.bigTotalItems);
        }).error(function (error) {
            console.error(error);
        });
    };

    $scope.refresh();

}
]);
