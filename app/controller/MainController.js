/**
 * Created by bence_mandli on 2016. 03. 01..
 */
'use strict';

app.controller('MainController', ['$scope', '$state', function ($scope, $state) {
    var vm = this;
    vm.Config = Config;

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

}
]);
