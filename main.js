require.config({

    paths: {
        jquery: 'externals/jquery-1.8.3',
        patterns: 'bundle',
        eventie: 'packery/eventie',
        eventEmitter: 'packery/EventEmitter',
        imagesloaded: 'packery/imagesloaded',
        'packery.pkgd': 'packery/packery.pkgd',
        packery: 'packery/pat-packery'
    },

    shim: {
        'packery.pkgd': {
            exports: 'Packery'
        }
    }
});

define(['patterns', 'packery'], function (Patterns, Packery) {
    console.log(Patterns);
    console.log(Packery);

});