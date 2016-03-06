/**
 * Created by bence_mandli on 2016. 03. 01..
 */
'use strict';

app.controller('MainController', ['$scope', '$state', 'TagService', function ($scope, $state, TagService) {
    var vm = this;
    vm.Config = Config;
    vm.searchText = '';
    vm.getAllTag = TagService.getAll;

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
        if (vm.searchText !== '' || TagService.getTag()) {
            $state.go('main.search', {
                searchText: vm.searchText,
                tag: TagService.getTag()

            });
        }
    };

    vm.setTag = function (tag) {
        TagService.setTag(tag);
    };

    vm.isActiveTag = function (tag) {
        return TagService.getTag() === tag;
    };

}
]);
