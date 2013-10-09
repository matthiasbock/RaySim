
OpticalSetup = function() {
    
    var obj = {
            svg: d3.select("body").append("svg:svg").attr('id', 'svg'),
            children: []
    };
    
    obj.append = function(child) {
        this.children.push(child);
        child.parent = this;
        child.draw();
    };
    
    return obj;
};

Ray = function(x1, y1, degree) {
    
    var obj = {
            x1: x1,
            y1: y1,
            degree: degree
    };
    
    obj.draw = function() {
        var r = 30;
        var x2 = this.x1 + Math.cos(this.degree)*r;
        var y2 = this.y1 + Math.sin(this.degree)*r;
        this.path = this.parent.svg.append('svg:path')
                        .attr('d', 'M '+x1+','+y1+' L '+x2+','+y2)
                        .attr('stroke','black');
    };
    
    return obj;
};

LightSource = function(cx, cy, degreeStart, degreeStop, numRays) {
    
    var obj = {
            cx: cx,
            cy: cy,
            degreeStart: degreeStart,
            degreeStop: degreeStop,
            rays: [],
            parent: null
    };
    
    obj.draw = function() {
        
        this.innerCircle = this.parent.svg.append('svg:circle')
            .attr('cx',this.cx)
            .attr('cy',this.cy)
            .attr('r',5)
            .attr('stroke','none')
            .attr('fill','black');
        
        this.outerCircle = this.parent.svg.append('svg:circle')
            .attr('cx',this.cx)
            .attr('cy',this.cy)
            .attr('r',15)
            .attr('stroke','black')
            .attr('stroke-dasharray','5,5')
            .attr('fill','none');
        /*
        var d = (degreeStop-degreeStart)/numRays;
        for (var i=0; i<numRays; i++) {
            var ray = Ray(cx, cy, degreeStart+(i*d));
            this.rays.push(ray);
            this.parent.append(ray);
        }
        */
    };
    
    return obj;
};
