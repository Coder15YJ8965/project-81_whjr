canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.stokeStyle - "red";
ctx.lineWidth - 1;
ctx.rect(180, 190, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#0085c7";
ctx.lineWidth = 5;
ctx.arc(280, 260, 40, 0, 2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth - 5;
ctx.arc(380, 260, 40, 0, 2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth - 5;
ctx.arc(480, 260, 40, 0, 2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#f4c300";
ctx.lineWidth - 5;
ctx.arc(330, 300, 40, 0, 2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#009f3d";
ctx.lineWidth - 5;
ctx.arc(430, 300, 40, 0, 2*Math.PI)
ctx.stroke();