var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

pageMod.PageMod({
    include: ["*.facebook.com", "file://*"],
    contentScriptFile: [
                        data.url("facebook_math.js"),
                        data.url("jquery-2.1.4.min.js")
                        ],
    contentScriptWhen: "ready",
    onAttach: function(worker) {
        worker.port.emit("mathjax_baseaddr", data.url("MathJax/"));
    }
});
