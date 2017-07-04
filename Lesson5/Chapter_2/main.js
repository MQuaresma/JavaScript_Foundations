/* A REQUEST to the server usually follows a predefined syntax.
 * The parameters are passed after the question mark (?) and
 * are in a key-value format the key in this being 'q' and 
 * 'units' and the values being the data we want to retrieve.
 * The parameters are separated by ampersands (&)
 * Before the question mark (?) is the service that is being REQUESTed
 */
jQuery.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=31e9e30ff49a614495d87375b43f10e8", function(data){
    console.log(data);
});

/* There are two main ways to send data to a service in a REQUEST
 * GET in which the data is sent in the URL
 * POST in which the data is sent along with the REQUEST but no as part of the URL
 */

/* RESPONSE handling is important as it allows to alert the user
 * when something has gone wrong, $.get returns a requestObject
 * which can be used to handle the RESPONSE
 */

var requestObject = $.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric");

// Method called when the REQUEST is successful
requestObject.done(function(data){
    console.log(data);
});

// Method called when the REQUEST fails
requestObject.fail(function(){
    alert("Request failed. Try again");
});

// Method caining allows for a more compact view
$.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric")
    .done(function(data){
        console.log(data);
    })
    .fail(function(){
        alert("Request failed. Try again");
    });


var requestObjectDone = $.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric")
    .done(function(data){
        console.log(data);
    });
requestObjectDone.fail(function(){
    alert("Request failed. Try again");
});