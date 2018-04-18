const lienzo = document.getElementById('lienzo');
const ctx = lienzo.getContext('2d');

ctx.font = "30px Arial";
ctx.fillText("WebMan Game", 10, 30)

ctx.fillRect(10, 30, 50, 50);

var x = 40;
var spdX = 20;
var y = 100;
var spdY = 20;


function update() {
    x += spdX;
    y += spdY;
    ctx.fillText("J", x, y);
}

setInterval(update, 1000);