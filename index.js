var canvas = document.getElementById('sandbox'),
    context = canvas.getContext('2d');

//context.fillRect(50,25, 200, 250);
var R = 250;
for(var d=0;d<60;d++){
    var angel=(d/60)*(2*Math.PI);
    var pX=Math.cos(angel)*R;
    var pY=-Math.sin(angel)*R;
    var qX=0.95*pX;
    var qY=0.95*pY;
    pX+=R;pY+=R;
    qX+=R;qY+=R;
circle=new Path2D();
    circle.moveTo(qX,qY);
    circle.lineTo(pX,pY);
    context.stroke(circle);
}

square=new Path2D();
    square.arc(250,250,250,0,2*Math.PI);
context.stroke(square)

var date=new Date();
var hours=date.getHours();
var minutes=date.getMinutes();
var seconds=date.getSeconds();

secondsAngel=(seconds/60)*(2*Math.PI);
minutesAngel=(minutes/60)*(2*Math.PI);
hoursAngel=((hours%12)/12)*(2*Math.PI);

secondsAngel=Math.PI/2-secondsAngel;
minutesAngel=Math.PI/2-minutessAngel;
hoursAngel=Math.PI/2-hoursAngel;

function drawWatch(){
    context.clearRect(0,0,300,300);
    setTimeout(drawWatch,1000);
}

drawWatch();