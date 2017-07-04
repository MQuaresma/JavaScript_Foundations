var email = "someone@something.com"
var invalidEmail = "someonedomain.com";

if(invalidEmail.indexOf("@") != -1){
    if(invalidEmail.indexOf(".") != -1) console.log("Valid email address!");
    else console.log("Invalid email address("+invalidEmail+")\n");
}else{
    console.log("Invalid email address("+invalidEmail+")\n");
}