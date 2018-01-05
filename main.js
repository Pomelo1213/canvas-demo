var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var pageWidth = document.documentElement.clientWidth;
var pageHeight = document.documentElement.clientHeight;


var linetWidth = 10; //这是点的直径，连接点与点的直线应该是直径的两倍
var earserOn = false;
var Operating = false; //
var startPoint;

//drawLine(100, 100, 0, 0);

reSize();

canvas.onmousedown = function(mouse){
    if(earserOn){
        createEarser(mouse.clientX, mouse.clientY, linetWidth, linetWidth);
        Operating = true;
    }else{
        drawCir(mouse.clientX, mouse.clientY, linetWidth);
        startPoint = {'x': mouse.clientX, 'y': mouse.clientY};
        Operating = true;
    }
}

canvas.onmousemove = function(mouse){
    if(earserOn){
        if(Operating){
            createEarser(mouse.clientX, mouse.clientY, linetWidth, linetWidth);
        }

    }else{

        if(Operating){
            drawCir(mouse.clientX, mouse.clientY, linetWidth);
            var endPoint = {'x': mouse.clientX, 'y': mouse.clientY};
            drawLine(startPoint.x, startPoint.y, endPoint.x, endPoint.y);

        }
        startPoint = endPoint;
    }
}

canvas.onmouseup = function(mouse){
    Operating = false;
}


//画圆
function drawCir(x, y, radius){
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI*2);
    context.fill();

}

function drawLine(startX, startY, endX, endY){
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.lineWidth = linetWidth*2;
    context.stroke();
}

function reSize(){
    canvas.width = pageWidth;
    canvas.height = pageHeight;
}

function createEarser(x, y, width, height){
    context.clearRect(x-width, y-height, width*2, height*2);
}

//橡皮擦点击
earser.onclick = function(){
    earserOn = true;
    action.className = 'action x';
}

//画笔点击
penscil.onclick = function(){
    earserOn = false;
    action.className = 'action';
}



