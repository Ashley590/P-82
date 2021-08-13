var mouseEvent="empty";
var lastPositionX,lastPositionY;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
color="black";
line_width=2;
radius=10;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value ;
    line_width=document.getElementById("width_line").value ;
    radius=document.getElementById("radius").value;
mouseEvent="mousedown";
}

canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    currentPositionX=e.clientX-canvas.offsetLeft;
    currentPositionY=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_width;
      ctx.arc(currentPositionX,currentPositionY,radius,0,2*Math.PI)
        ctx.stroke();

    }
    lastPositionX=currentPositionX;
    lastPositionY=currentPositionY;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}
