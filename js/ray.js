
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
