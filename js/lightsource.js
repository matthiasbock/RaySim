
LightSource = function(parentSetup, debug, randomXY) {
    
    Element.call(this);
    
    this.parentSetup = parentSetup;
    this.parentSetup.append(this);
    this.debug = debug ? debug : (this.parentSetup.debug ? this.parentSetup.debug : false);
    
    this.rays = [];
    
    var x = 50;
    var y = 50;
    this.innerCircle = this.parentSetup.svg.append('svg:circle')
                                            .attr('cx',x)
                                            .attr('cy',y)
                                            .attr('r',5)
                                            .attr('stroke','none')
                                            .attr('fill','black');
    this.outerCircle = this.parentSetup.svg.append('svg:circle')
                                            .attr('cx',x)
                                            .attr('cy',y)
                                            .attr('r',15)
                                            .attr('stroke','black')
                                            .attr('stroke-dasharray','5,5')
                                            .attr('fill','none');
    this.bbox = this.parentSetup.newBoundingBox(60, 60);
    var self = this; this.bbox.call(d3.behavior.drag().on("drag", function() { moveElement(self); } ));
    
    /*
    var d = (degreeStop-degreeStart)/numRays;
    for (var i=0; i<numRays; i++) {
        var ray = Ray(cx, cy, degreeStart+(i*d));
        this.rays.push(ray);
        this.parent.append(ray);
    }
    */
    if (randomXY ? randomXY : true) {
        x = Math.random()*(parseInt($('svg').css('width'))-80)+40;
        y = (Math.random()*(parseInt($('svg').css('height'))-80))+40;
    }
    this.setXY(x,y);
};

LightSource.prototype = new Element();

LightSource.prototype.constructor = LightSource;

LightSource.prototype.refresh = function() {
    
    this.innerCircle.attr('cx',this.x).attr('cy',this.y);
    this.outerCircle.attr('cx',this.x).attr('cy',this.y);
    this.bbox.attr('x',this.x-30).attr('y',this.y-30);
    
};
