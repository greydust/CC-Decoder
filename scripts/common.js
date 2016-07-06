if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) { 
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
            ;
        });
    };
}

function GetElementOffset(e) {
    var offset = {x:0,y:0};
    while (e)
    {
        offset.x += e.offsetLeft;
        offset.y += e.offsetTop;
        e = e.offsetParent;
    }

    if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft))
    {
        offset.x -= document.documentElement.scrollLeft;
        offset.y -= document.documentElement.scrollTop;
    }
    else if (document.body && (document.body.scrollTop || document.body.scrollLeft))
    {
        offset.x -= document.body.scrollLeft;
        offset.y -= document.body.scrollTop;
    }
    else if (window.pageXOffset || window.pageYOffset)
    {
        offset.x -= window.pageXOffset;
        offset.y -= window.pageYOffset;
    }
    
    return offset;
}

function GetClientWidth() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

function GetClientHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}