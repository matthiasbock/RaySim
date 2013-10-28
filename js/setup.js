
numberOfSetups = 0;

Setup = function() {
    
    this.name = 'setup'+(numberOfSetups++);
    this.svg = d3.select("body").append("svg:svg");
    this.elements = [];
    
    var width = $('body').css('width');
    var height = parseInt($('body').css('height'))*0.8;
    this.rectMoveCanvas = this.svg.append('svg:rect')
                                    .attr('class','rectMoveCanvas')
                                    .attr('x',0)
                                    .attr('y',0)
                                    .attr('width',width)
                                    .attr('height',height);
    var self = this; this.rectMoveCanvas.call(d3.behavior.drag().on("drag", function() { moveSetup(self); } ));
};

Setup.prototype.getName = function() {
    return this.name;
};

Setup.prototype.append = function(element) {
    if (this.elements.indexOf(element) < 0)
        this.elements.push(element);
};

Setup.prototype.newBoundingBox = function(width, height) {
    var bbox = this.svg.append('svg:rect').attr('class','rectBoundingBox');
    if (typeof width != 'undefined')
        bbox.attr('width',width).attr('height',height);
    else
        bbox.attr('width',80).attr('height',60);
    return bbox;
};
