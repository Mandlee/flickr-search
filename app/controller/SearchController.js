/**
 * Created by bence_mandli on 2016. 03. 01..
 */
'use strict';

app.controller('SearchController', ['$scope', '$stateParams', 'HttpService', function ($scope, $stateParams, HttpService) {
    var vm = this;

    console.log($stateParams.searchText);

    HttpService.get("/rest", {
        method: 'flickr.photos.search',
        api_key: Config.API_KEY,
        format: 'json',
        text: $stateParams.searchText,
        nojsoncallback: 1
    }).success(function (data) {
        console.log(data);
        $scope.results = data.photos;
    }).error(function (error) {
        console.error(error);
    });


}
]);
