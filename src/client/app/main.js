/**
 * Created by moshi on 5/30/2016.
 */
require('./main.styl');
var ngPlatformBrowserDynamic = require('@angular/platform-browser-dynamic');
var ngCore = require('@angular/core');
var appComponent = ngCore.Component({
        selector: 'app',
        template: require('./main.html'),
        directives: [
            require('./components/header'),
            require('./components/footer')
        ]
    })
    .Class({
        constructor: function () {
        }
    });

ngPlatformBrowserDynamic.bootstrap(appComponent);
