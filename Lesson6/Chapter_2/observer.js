// Observer Pattern

var subject = {
    observers: [],
    registerObserver: function(obs){
        this.observers.push(obs);
    },
    unregisterObserver: function(obs){
        var ind = this.observers.indexOf(obs);
        if(ind != -1) this.observers.splice(ind, 1);
    },
    notifyObservers: function(){
        for(var i = 0; i < this.observers.length; i ++)
            this.observers[i].notify();
    }
};

document.getElementById("cb1").addEventListener("click", onCheckBoxChanged);
document.getElementById("cb2").addEventListener("click", onCheckBoxChanged);
document.getElementById("cb3").addEventListener("click", onCheckBoxChanged);

function onCheckBoxChanged(event){
    if(document.getElementById("cb1").checked &&
        document.getElementById("cb2").checked &&
        document.getElementById("cb3").checked){
            subject.notifyObservers();
        }
}

var observer1 = {
    notify: function(){
        var form = document.getElementById("form");
        document.body.removeChild(form);
    }
}

subject.registerObserver(observer1);

var observer2 = {
    notify: function(){
        var h2 = document.createElement("h2");
        h2.textContent = "COMPLETE!";
        document.body.appendChild(h2);
    }
}

subject.registerObserver(observer2);

subject.registerObserver({
    notify: function(){
        alert("You are done!");
    }

});