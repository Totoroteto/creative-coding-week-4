(function () {

    var canvas = document.getElementById('my-canvas');
    var ctx = canvas.getContext('2d');
    
    console.log("canvas: ", canvas);
    console.log("context: ", ctx);

    var Star = CreativeCoding.Star;
    
    window.requestAnimationFrame = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame;
    
    var drawLoop = function () {
        
        requestAnimationFrame(drawLoop);
        console.log("drawing");
    };
    
    requestAnimationFrame(drawLoop);
    
    
})();

    