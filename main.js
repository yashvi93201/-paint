var mouseEvent="empty";
var lastpositionofx,lastpositionofy;
color="black";
width_line=1;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_line=document.getElementById("line_width").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_positon_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;
if (mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_line;
    ctx.moveTo(lastpositionofx,lastpositionofy);
    ctx.arc(current_positon_of_mouse_x,current_position_of_mouse_y,10,0,2*Math.PI);
    ctx.stroke();
}
lastpositionofx=current_positon_of_mouse_x;
lastpositionofy=current_position_of_mouse_y;

}
canvas.addEventListener("mouseUp",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}
 canvas.addEventListener ("mouseleave",my_mouseleave);
 function my_mouseleave(e){
     mouseEvent="mouseleave";
 }
 function cleararea(){
     ctx.clearRect(0,0,canvas.width,canvas.height);
     
 }