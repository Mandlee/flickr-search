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

    var _activeTag = null;

    vm.isActiveTag = function (tag) {
        if (_activeTag === null) {
            return false;
        }
        return _activeTag.indexOf(tag) !== -1;
    };

    vm.toggleTag = function (tag) {
        if (_activeTag === tag) {
            TagService.setTag(null);
            _activeTag = null;
        }
        else {
            if (tag.indexOf('.') !== -1) {
                var _subTag = tag.slice(tag.lastIndexOf('.') + 1, tag.length);
            }
            TagService.setTag(_subTag || tag);
            _activeTag = tag;
        }
    };

}
]);
