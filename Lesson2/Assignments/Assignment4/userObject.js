var user = {
    firstName: "Miguel",
    lastName: "Quaresma",
    email: "noneOfYourBusiness@email.com"
};

function logUserInfo(user){
    console.log(user.firstName + " " + user.lastName + ": " + user.email);
}

logUserInfo(user);