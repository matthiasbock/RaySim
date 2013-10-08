
OpticalSetup = function() {
    
    var obj = {
            svg: $('<svg id="svg">'),
            children: []
    };
    
    $('#body').append(svg);
    
    obj.append = function(child) {
        this.children.push(child);
        this.svg.append(child.svg);
    };
    
    return obj;
};

LightSource = function(degreeStart, degreeStop, numRays) {
    
    var obj = {
            degreeStart: degreeStart,
            degreeStop: degreeStop,
            numRays: numRays,
            svg: null
    };
    
    return obj;
};
