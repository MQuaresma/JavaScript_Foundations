/*Depends on where the script tag is located*/
console.log("window: "+window);
console.log("document: "+document);
console.log("document.head: "+document.head);
console.log("document.title: "+document.title);
console.log("document.body: "+document.body);

/* Another way of solving the load time discrepancy could be
to add an event listener for when the page is fully loaded
but this would wait until ALL the resources were loaded,
such as pictures, CSS, ....
*/
window.addEventListener("load", function(){
    console.log("window: "+window);
    console.log("document: "+document);
    console.log("document.head: "+document.head);
    console.log("document.title: "+document.title);
    console.log("document.body: "+document.body);
});

/* This way the event listener would wait for only the HTML page to be loaded
Might not work in some browsers such as IE*/
document.addEventListener("DOMContentLoaded", function(){
    console.log("window: "+window);
    console.log("document: "+document);
    console.log("document.head: "+document.head);
    console.log("document.title: "+document.title);
    console.log("document.body: "+document.body);
});