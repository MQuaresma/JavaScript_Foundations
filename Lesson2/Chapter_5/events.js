// An event listener defines a handler for when a certain event ocurres in the specified element
// Events can be mouse clicks/presses and key presses

// this listener is defined for the whole document
document.addEventListener("mousedown", function(event){
    console.log("mouse down. x:"+event.clientX+" y:"+event.clientY);
});

document.addEventListener("mousemove", function(event){
    console.log("mouse move. x:"+event.clientX+" y:"+event.clientY);
});

document.addEventListener("keydown", function(event){
    console.log("keydown: "+String.fromCharCode(event.keyCode));
});

document.addEventListener("keyup", function(event){
    console.log("keyup: "+event.keyCode);
});

document.addEventListener("mouseup", function(event){
    console.log("mouseup. y:"+event.clientY+" x:"+event.clientX);
});

document.addEventListener("keypress", onKeyPress);

// log keys which are pressed and output them if they are numbers or letters
function onKeyPress(event){
    var kCode = event.keyCode;

    if(kCode >= 65 && kCode <= 90) console.log("You typed the letter "+String.fromCharCode(kCode));
    else if(kCode >= 48 && kCode <= 57) console.log("You typed the number "+String.fromCharCode(kCode));
    else console.log("You didn't typed nor a number nor a letter");
}