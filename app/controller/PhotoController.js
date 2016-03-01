/**
 * Created by bence_mandli on 2016. 03. 01..
 */
'use strict';

app.controller('PhotoController', ['$scope', '$stateParams', 'HttpService', function ($scope, $stateParams, HttpService) {
    var vm = this;

    console.log($stateParams.id);

    HttpService.get("/rest", {
        method: 'flickr.photos.getInfo',
        api_key: Config.API_KEY,
        format: 'json',
        photo_id: $stateParams.id,
        //secret: secret,
        nojsoncallback: 1
    }).success(function (data) {
        console.log(data);
        $scope.picture = data.photo;
    }).error(function (error) {
        console.error(error);
    });

}
]);
