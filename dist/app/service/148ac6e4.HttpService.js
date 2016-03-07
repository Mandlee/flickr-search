/**
 * Created by bence_mandli on 2016. 02. 20..
 */
'use strict';

app.service('HttpService', ['$http', function ($http) {

    this.get = function (uri, params) {
        var url = Config.BACKEND_URL;
        params['api_key'] = Config.API_KEY;
        params['format'] = 'json';
        params['nojsoncallback'] = 1;
        if (uri.substr(1, 1) === '/') {
            url = '';
            uri = uri.substr(2);
        }
        return $http.get(url + uri, {params: params});
    };

    this.post = function (uri, data) {
        return $http.post(Config.BACKEND_URL + uri, $.param(data || {}));
    };

    /*return {
        get: get,
        post: post
    };*/

}
]);
