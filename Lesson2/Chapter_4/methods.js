var messenger = {
    greeting: "Hello",

    name: "everyone",
    
    sayHello: function(){
        console.log(this.greeting + ", " + this.name + "!");
    }
};

messenger.greeting = "Konnichiwa";
messenger.name = "minasan";
// functions can be properties
messenger.sayHello();