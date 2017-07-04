// JS allows selecting elements by:

// -Id(only one)
document.addEventListener("DOMContentLoaded", function(){
    var btn = document.getElementById("btn");

    // add event listener to the element with this id
    btn.addEventListener("click", function(){
        alert("Hello, world!");
    });
});

// -Class(might be more than one)
document.addEventListener("DOMContentLoaded", function(){
    var elems = document.getElementsByClassName("first_paragraph");

    //change the background of all elements from this class to red
    for(var i = 0; i < elems.length; i ++)
        elems[i].style.backgroundColor = "red";
});

// -Tag(might be more than one)
document.addEventListener("DOMContentLoaded", function(){
    var elems = document.getElementsByTagName("li");

    //change the background of all elements from this tag to red
    for(var i = 0; i < elems.length; i += 2)
        elems[i].style.backgroundColor = "red";
});

// -Multiple parameters using CSS selectors
document.addEventListener("DOMContentLoaded", function(){
    var elem = document.querySelector("p span.exciting");

    elem.style.backgroundColor = "red";
});


document.addEventListener("DOMContentLoaded", function(){
    var elems = document.querySelectorAll("p span.exciting");

    elems[0].style.backgroundColor = "red";
});