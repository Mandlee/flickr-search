/**
 * Created by bence_mandli on 2016. 03. 01..
 */
'use strict';

app.factory('HttpInterceptor', ['$q', '$location', '$window', '$rootScope', function ($q, $location, $window, $rootScope) {
    return {
        responseError: function (rejection) {
            var status = rejection.status;
            var isProduction = !Config.development && (status === 401 || status === 403 || !status);
            var isDevelopment = Config.development && (status === 401);
            if (isProduction || isDevelopment) {
                var params = $location.search();
                params.url = $location.path();
                params.alert = status === 403 ? 'Forbidden' : '';
                $rootScope.redirectParams = params;
            }
            return $q.reject(rejection);
        }
    };
}
]);
