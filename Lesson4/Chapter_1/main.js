/* There are several ways to add new HTML elements to a page
 * This will demonstrate a couple of ways to add new elements to an unordered list 
*/

var list = document.querySelector("ul");

/* The first method is using the innerHTML method however this makes it
 * hard to add elements in between already existing elements
 * making it not as portable as other methods
*/
list.innerHTML = "<li>List Item 1</li><li>List Item 2</li>";

list.innerHTML += "<li>List Item 3</li>";

// The createElement method allows the creation of elements give a tag
var item = document.createElement("li");
item.textContent = "List Item 4";

// The appendChild method allows appending elements as childs of a element
list.appendChild(item);

// However we might want to insert a intermediate element
item = document.createElement("li");
var items = list.getElementsByTagName("li");
var inRef = list[2];

item.textContent = "List Item 2.5";
/* insertBefore performs this insertion given the element to be inserted and a reference element
 * i.e the element after the one we're inserting
 */
list.insertBefore(item, inRef);