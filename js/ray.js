
Ray = function(parentSetup, x, y, degree, length) {
    
    Element.call(this);
    
    this.parentSetup = parentSetup;
    this.parentSetup.append(this);
    this.path = this.parentSetup.svg.append('svg:path').attr('class','ray');
    
    this.x = x;
    this.y = y;
    this.degree = degree;
    this.setLength( this.length = length ? length : 2000 );
};

Ray.prototype = new Element();

Ray.prototype.constructor = Ray;

Ray.prototype.refreshPath = function() {
    this.stop = {
                x: Math.cos(this.degree*Math.PI/180)*this.length,
                y: Math.sin(this.degree*Math.PI/180)*this.length
                };
    this.path.attr('d', 'M0,0 l'+coord(this.stop));
};

Ray.prototype.setDegree = function(degree) {
    this.degree = degree;
    this.refreshPath();
    this.refresh();
};

Ray.prototype.setLength = function(length) {
    this.length = length;
    this.refreshPath();
    this.refresh();
};

Ray.prototype.refresh = function() {
    this.path.attr('transform', 'translate('+this.x+','+this.y+')');
};

