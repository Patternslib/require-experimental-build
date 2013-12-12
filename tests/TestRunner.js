
define("TestRunner", function() {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();
    jasmineEnv.addReporter(htmlReporter);

    //var consoleReporter = new jasmine.ConsoleReporter();
    //window.console_reporter = consoleReporter;
    //jasmineEnv.addReporter(consoleReporter);

    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };
//             "../tests/specs/core/store.js","../tests/specs/lib/depends_parse.js","../tests/specs/lib/dependshandler.js",,"../tests/specs/pat/autoscale.js","../tests/specs/pat/autosubmit.js","../tests/specs/pat/bumper.js","../tests/specs/pat/carousel.js","../tests/specs/pat/checkedflag.js","../tests/specs/pat/checklist.js","../tests/specs/pat/collapsible.js","../tests/specs/pat/depends.js","../tests/specs/pat/equaliser.js","../tests/specs/pat/focus.js","../tests/specs/pat/gallery.js","../tests/specs/pat/image-crop.js","../tests/specs/pat/inject.js","../tests/specs/pat/legend.js","../tests/specs/pat/markdown.js","../tests/specs/pat/modal.js","../tests/specs/pat/slides.js","../tests/specs/pat/slideshow-builder.js","../tests/specs/pat/stacks.js","../tests/specs/pat/switch.js","../tests/specs/pat/toggle.js","../tests/specs/pat/validate.js","../tests/specs/pat/zoom.js"]

    require(["../tests/specs/jquery-ext.js",
             "../tests/specs/utils.js",
             "../tests/specs/core/parser.js",
             "../tests/specs/core/utils.js",
             "../tests/specs/lib/htmlparser.js",
             "../tests/specs/pat/ajax.js",
             "../tests/specs/pat/inject.js"], function() {
        jasmineEnv.execute();
    });
});

require(["TestRunner"]);

