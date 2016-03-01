/**
 * Created by bence_mandli on 2016. 02. 20..
 */
'use strict';

app.service('HttpService', ['$http', function ($http) {

    var get = function (uri, params) {
        var url = Config.BACKEND_URL;
        if (uri.substr(1, 1) === '/') {
            url = '';
            uri = uri.substr(2);
        }
        return $http.get(url + uri, {params: params});
    };

    var post = function (uri, data) {
        return $http.post(Config.BACKEND_URL + uri, $.param(data || {}));
    };

    return {
        get: get,
        post: post
    };

}
]);
