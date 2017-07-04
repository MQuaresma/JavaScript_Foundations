/* The objects(data) exchanged between the server and the client 
 * can't be transmited as is, they have to be converted
 * into a format that is readable by both parties.
 * The most used formats are XML and JSON. When the server sends
 * the data it performs SERIALIZATION of the object which, when 
 * arrives at the clients end, is converted back into an object 
 * via a process called DESERIALIZATION. jQuery is responsible for this
 * conversion between JSON and the corresponding object
 */ 

// This way jQuery will read the JSON and convert it to an object as specified in the JSON (JavaScrip Object Notation)
$.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=31e9e30ff49a614495d87375b43f10e8")
    .done(function(data){
        console.log(data);
    })
    .fail(function(){
        alert("Request failed. Try again");
    });

/* This will tell jQuery the datatype that the server sends, if it is JSON
 * then it will try to convert it, in this case it will keep as is
 */
jQuery.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=31e9e30ff49a614495d87375b43f10e8", null, null, "text")
    .done(function(data){
        console.log(data);
    })
    .fail(function(){
        alert("Request failed. Try again");
    });

$.get("http://omdbapi.com/?s=star wars", null, null, "json")
    .done(function(data){
        console.log(data);
    })
    .fail(function(){
        alert("Request failed. Try again");
    });