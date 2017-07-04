// Change html elements with javascript

var item = document.querySelector("li");
item.textContent = "Thing one";

var list = document.querySelector("ul");
list.textContent = "List";                      //textContent performs a literal replacement of the object
list.innerHTML = "<li>Thing one</li><li>Thing two</li>"; //innerHTML allows the use of html tags

// javascript also allows changing the element (CSS) style
var firstHeading = document.querySelector("h1");
firstHeading.style.fontFamily = "Arial";
firstHeading.style.fontSize = "48px";
firstHeading.style.color = "red"; //firstHeading.style.color = "rgb(255,0,255)";
