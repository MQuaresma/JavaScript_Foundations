/* In JS variable scope's can be of two types
 * Local-it's declared inside a function and only accessible in it
 * Global-it's available anywhere
 * The problem with global variables is that they can lead to
 * discrepancies when, for instance, there are two (global) variables
 * with the same name in different files. This can also occur with functions.
 * Creating properties in the global scope is called "polluiting the global namespace".
 */
var message = "Welcome to my site";

window.addEventListener("load", function(){
    var header = document.getElementById("header");
    header.textContent = message;
});

/* A solution to avoiding this is using the $.ready method or the load/DOMContentLoaded 
 * events
 */
window.addEventListener("load", function(){
    var message = "Welcome to my site";
    var header = document.getElementById("header");
    header.textContent = message;
});

/* A solution for the scope of function names is using an anonymous
 * function coupled with an IIFE(Immediately Invoked Function Expression)
 */ 
(function(){
    var message = "Welcome to my site";
    var secondHeader = document.createElement("h1");
    secondHeader.textContent = message;
    document.body.appendChild(secondHeader);
})();