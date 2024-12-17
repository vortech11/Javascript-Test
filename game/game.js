import * as vm from "./vectorMath.js";

const canvas = document.getElementById("screen1");
const ctx = canvas.getContext("2d");

var camera = new vm.Vector2(0, 0);


drawObject([new vm.Vector2(50, 50), 
            new vm.Vector2(100, 50), 
            new vm.Vector2(100, 100),
            new vm.Vector2(50, 100)], 
            "rgb(100 100 100)");


function drawObject(points, color) {
    ctx.beginPath();
    ctx.fillStyle = color
    ctx.moveTo(points[0].x + camera.x, points[0].y + camera.y);
    var l = points.length;
    for(var i = 0; i < l; i++){
        ctx.lineTo(points[i].x + camera.x, points[i].y + camera.y);
    }
    ctx.closePath();
    ctx.fill();
}