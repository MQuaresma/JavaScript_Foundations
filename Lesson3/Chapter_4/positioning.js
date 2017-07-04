// Change positioning with javascript
var block = document.getElementById("block");

block.style.width = "100px";
block.style.height = "100px";
block.style.background = "red";

block.style.position = "absolute";

//set the position of the block to be the position of the mouse when a click event is registered
document.addEventListener("click", function(event){
    block.style.left = event.clientX + "px";
    block.style.top = event.clientY + "px";
});