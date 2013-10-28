
Element = function() {};

Element.prototype.getName = function() {
    return this.parentSchematic.getName()+' > '+this.name;
};

Element.prototype.setXY = function(x, y) {
    
    if (typeof x == 'object') {
        y = x.y;
        x = x.x;
    }
    if (this.x != x || this.y != y) {
        this.x = x;
        this.y = y;
        this.refresh();
    }
    return this;
};

$.getScript('js/lightsource.js');
$.getScript('js/mirror.js');
