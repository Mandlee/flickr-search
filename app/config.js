/**
 * Created by bence_mandli on 2016. 03. 01..
 */
'use strict';

var Config = {
    BACKEND_URL: 'https://api.flickr.com/services',
    API_KEY: '57f694132e4714c29a64c9af890b124e',
    development: false,
    "appName": "Flickr Search",
    "version": "0.1 dev"
};

(function () {
    var host = window.location.hostname;

    // FED developers
    if (host.indexOf('localhost') !== -1 || host.indexOf('127.0.0.1') !== -1) {
        Config.development = true;
    }

})();
