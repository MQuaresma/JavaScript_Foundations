var list = document.querySelector("ul");
var item = document.querySelector("li");

// Removes an element given it's parent
list.removeChild(item);

// If the child element isn't a child element removeChild will result in an error
var sec1 = document.querySelector("h1");
list.removeChild(sec1);

// parentElement retrieves the element's parent
sec1.parentElement.removeChild(sec1);

// removeChild returns the removed element
var sec2 = document.body.removeChild(document.querySelector("h1"));
var p = document.querySelector("p");
p.appendChild(sec2);

// childNodes & children return an array with the element's children with the last one ignoring the text data (new line and tabs)
var listChildren = list.children;
// firstChild & firstElementChild / lastChild & lastElementChild return the first/last element child
var firstChild = list.firstElementChild;
var lastChild = list.lastElementChild;

var itemChild = listChildren[3];

/* To iterate through the element's children we can use the
 * nextSibling & nextElementSibling
 * previousSibling & previousElementSibling
 * methods
 */

var itemChildPrevious = itemChild.previousElementSibling;
var itemChildNext = itemChild.nextElementSibling;