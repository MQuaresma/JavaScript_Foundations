/* jQuery provides an easy way to retrieve data from a server
 * to this we first perform a REQUEST to the server which
 * returns the data via a RESPONSE.
 * A REQUEST might be a URL and a RESPONSE might be a file.
 */
jQuery.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric", function(data){
    console.log(data);
});