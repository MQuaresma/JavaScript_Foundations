/* Mustache is a library that allows the usage of HTML templates
 * by using tags delimited by '{{' and '}}' which are replaced
 * when the render method is called, this method takes a template
 * and some data and performs the replacement of the tags based on the
 * tag's name by matching it with a property of the object(data) 
 * with the same name
 */

// Templates can be created from raw strings
var template = "<h1>Hello, {{firstName}} {{lastName}}!</h1>";

var data = {
    firstName: "Bob",
    lastName: "Smith"
};

var html = Mustache.render(template, data);

var div = document.createElement("div");

div.innerHTML = html;
document.body.appendChild(div);

// Or from HTML script tags by changing it's type and retrieving it's content
var template = document.getElementById("template").innerHTML;

var data = {
    firstName: "Bob",
    lastName: "Smith"
};

var html = Mustache.render(template, data);

var div = document.createElement("div");

div.innerHTML = html;
document.body.appendChild(div);