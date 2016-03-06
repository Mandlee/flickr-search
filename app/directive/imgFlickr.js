/**
 * Created by bence_mandli on 2016. 03. 06..
 */
app.directive('imgFlickr', function () {
    return {
        restrict: 'E',
        scope: {
            picture: "=",
            size: "@"
        },
        templateUrl: 'view/common/img_flickr.html'
    };
});