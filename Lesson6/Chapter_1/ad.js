var message = "Buy Bob's widgets";

window.addEventListener("load", function(){
    var div = document.createElement("div");
    div.style.width="200px";
    div.style.backgroundColor="#ffffcc";
    div.style.fontSize="20px";
    div.style.border="1px solid black";
    div.style.position="absolute";
    div.style.right=0;
    div.style.top=0;
    div.innerHTML="<em>Advertisement</em><br/>"+message;
    
    document.body.appendChild(div);
});