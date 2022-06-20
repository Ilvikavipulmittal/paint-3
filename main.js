var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
var color="black";
var Width_of_line=1;

canvas.addEventListener("mouseup",my_mouseup);

 function my_mouseup(e){
     mouseEvent="mouseUp";
 }

 canvas.addEventListener("mousedown", my_mousedown);

 function my_mousedown(e){

     mouseEvent="mouseDown";
 }

 canvas.addEventListener("mouseleave",my_mouseleave);

 function my_mouseleave(e){
     mouseEvent="mouseleave";
 }

 canvas.addEventListener("mousemove", my_mousemove);

 function my_mousemove(e){
     current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
     current_position_of_mouse_y=e.clientY-canvas.offsetTop;

     if(mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=Width_of_line;
    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();
     }
     last_position_of_x=current_position_of_mouse_x;
     last_position_of_y=current_position_of_mouse_y; 
 }

 var last_position_of_touch_x,last_position_of_touch_y;
 var width=screen.width;
 new_width=screen.width-70;
 new_height=screen.height-300;
 if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
 }
 canvas.addEventListener("touchstart", my_touchstart)
 function my_touchstart(e){
     last_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
     last_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
 }
 canvas.addEventListener("touchmove",my_touchmove);
 function my_mousemove(e)
 {
     current_position_of_mouse_x - e.clientX - canvas.offsetLeft;
     current_position_of_mouse_y = e.clientY - canvas.offsetTop;

     if (mouseEvent=="mouseDown"){
         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth = Width_of_line;
         ctx.moveTo(last_position_of_x, last_position_of_y);
         ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
         ctx.stroke();

     }
     last_position_of_x = current_position_of_mouse_x;
     last_position_of_y = current_position_of_mouse_y;
 }