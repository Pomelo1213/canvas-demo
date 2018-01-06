var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var pageWidth = document.documentElement.clientWidth;
var pageHeight = document.documentElement.clientHeight;


var linetWidth = 10; //这是点的直径，连接点与点的直线应该是直径的两倍
var earserOn = false;
var Operating = false; //
var paintColor = 'black';
var startPoint;


reSize();


/*
function start(canvas){
    //特性检测
    if('ontouchstart' in document.body){

    }else{

    }
}
*/

//////////////////////////////手机端

canvas.ontouchstart = function(touch){
    if(earserOn){
        createEarser(touch.touches[0].clientX, touch.touches[0].clientY, linetWidth, linetWidth);
        Operating = true;
    }else{
        drawCir(touch.touches[0].clientX, touch.touches[0].clientY, linetWidth);
        startPoint = {'x': touch.touches[0].clientX, 'y': touch.touches[0].clientY};
        Operating = true;
    }
}

canvas.ontouchmove = function(touch){
    if(earserOn){
        if(Operating){
            createEarser(touch.touches[0].clientX, touch.touches[0].clientY, linetWidth, linetWidth);
        }

    }else{

        if(Operating){
            drawCir(touch.touches[0].clientX, touch.touches[0].clientY, linetWidth);
            var endPoint = {'x': touch.touches[0].clientX, 'y': touch.touches[0].clientY};
            drawLine(startPoint.x, startPoint.y, endPoint.x, endPoint.y);

        }
        startPoint = endPoint;
    }
}

canvas.ontouchend = function(){
    Operating = false;
}

//////////////////////////////PC端
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
    context.fillStyle = paintColor;
    context.fill();

}

function drawLine(startX, startY, endX, endY){
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.lineWidth = linetWidth*2;
    context.strokeStyle = paintColor;
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
    earser.classList.add('active');
    penscil.classList.remove('active');
}

//画笔点击
penscil.onclick = function(){
    earserOn = false;
    penscil.classList.add('active');
    earser.classList.remove('active');
}

earser.onclick = function(){
    earserOn = true;
    earser.classList.add('active');
    penscil.classList.remove('active');
}

black.onclick = function(){
    black.classList.add('active');
    red.classList.remove('active');
    blue.classList.remove('active');
    green.classList.remove('active');
    paintColor = 'black';

}

red.onclick = function(){
    red.classList.add('active');
    blue.classList.remove('active');
    green.classList.remove('active');
    black.classList.remove('active');
    paintColor = 'red';

}

green.onclick = function(){
    green.classList.add('active');
    blue.classList.remove('active');
    red.classList.remove('active');
    black.classList.remove('active');
    paintColor = 'green';
}

blue.onclick = function(){
    blue.classList.add('active');
    red.classList.remove('active');
    green.classList.remove('active');
    black.classList.remove('active');
    paintColor = 'blue';
}

clear.onclick = function(){
    context.clearRect(0, 0, pageWidth, pageHeight);
}

down.onclick = function(){
    var a = document.createElement('a');
    document.body.appendChild(a);
    console.log('a');
    var url = canvas.toDataURL('image/png');
    a.href = url;
    a.download = 'xxx';
    a.click();
}

small.onclick = function(){

    linetWidth = 4;
}

big.onclick = function(){

    linetWidth = 10;
}


