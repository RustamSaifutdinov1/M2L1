var canvas = document.getElementById('sandbox'),
    context = canvas.getContext('2d');

//context.fillRect(50,25, 200, 250);
    var square=new Path2D();
square.moveTo(50,50);
square.lineTo(250,50);
square.lineTo(250,250);
square.lineTo(50,250);
square.lineTo(50,50);
context.stroke(square);
    var circle=new Path2D();
circle.arc(150,150,100,0,2*Math.PI);
context.lineWidth=5;
context.strokeStyle="red";
context.fillStyle="blue";
context.stroke(circle);
context.fill(circle);
