/**
 * Created by bence_mandli on 2016. 03. 01..
 */
'use strict';

app.controller('PhotoController', ['$scope', '$stateParams', 'HttpService', '$state', function ($scope, $stateParams, HttpService, $state) {
    var vm = this;

    HttpService.get("/rest", {
        method: 'flickr.photos.getInfo',
        photo_id: $stateParams.id
    }).success(function (data) {
        $scope.picture = data.photo;
    }).error(function (error) {
        console.error(error);
    });

    vm.selectTag = function (tag) {
        $state.go('main.search', {
            tag: tag
        });
    };

}
]);
