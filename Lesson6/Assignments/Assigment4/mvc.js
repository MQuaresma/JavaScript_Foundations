// Keeps track of the items and notifies the view to update
var model = {
    observers: [],
    items: [],
    addObserver: function(obs){
        this.observers.push(obs);
    },
    notifyObservers: function(){
        for(var i = 0; i < this.observers.length; i ++)
            this.observers[i].notify();
    },
    addItem: function(item){
        this.items.push(item);
        this.notifyObservers();
    }
};

// Updates the display when needed
var view = {
    input: document.getElementById("input"),
    list: document.getElementById("list"),
    button: document.getElementById("button"),
    init: function(){
        model.addObserver(this);
        this.button.addEventListener("click", function(){
            controller.addItem(input.value);
        });
    },
    notify: function(){
        var html = "";
        for(var i = 0; i < model.items.length; i ++)
            html += "<li>"+model.items[i]+"</li>";
        this.list.innerHTML = html;     
    }
}

view.init();

// Establishes the interface between the model and the view, adding new items to the former when needed
var controller = {
    addItem: function(item){
        model.addItem(item);
        view.input.value="";
    }
};