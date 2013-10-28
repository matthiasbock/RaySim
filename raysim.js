
coord = function(point) {
    return point.x+','+point.y;
};

moveElement = function(element) {
    if (! (element instanceof Ray))
        element.setXY(element.x + d3.event.dx, element.y + d3.event.dy);
};

moveSetup = function(setup) {
    for (var i=0; i<setup.elements.length; i++)
        if (! (setup.elements[i] instanceof Ray))
            moveElement(setup.elements[i]);
};

//Capture JS errors from js files called using the $.getScript function
$.extend({
    getScript: function (url, callback) {
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.src = url;
        // Handle Script loading
        {
            var done = false;
            // Attach handlers for all browsers
            script.onload = script.onreadystatechange = function () {
                if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                    done = true;
                    if (callback) callback();
                    // Handle memory leak in IE
                    script.onload = script.onreadystatechange = null;
                }
            };
        }
        head.appendChild(script);
        // We handle everything using the script element injection
        return undefined;
    },
});

$.getScript('js/setup.js');
$.getScript('js/ray.js');
$.getScript('js/elements.js');
