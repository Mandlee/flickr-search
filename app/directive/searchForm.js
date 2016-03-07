/**
 * Created by bence_mandli on 2016. 03. 07..
 */
app.directive('searchForm', ['TagService', '$state', function (TagService, $state) {
    return {
        restrict: 'E',
        templateUrl: 'view/common/search_form.html',
        link: function ($scope, $element, $attr) {
            $scope.text = '';
            $scope.search = function () {
                if ($scope.text !== '' || TagService.getTag()) {
                    $state.go('main.search', {
                        searchText: $scope.text,
                        tag: TagService.getTag()
                    });
                }
            };
        }
    };
}]);