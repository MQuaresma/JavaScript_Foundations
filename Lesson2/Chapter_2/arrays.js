var items = ["hammer",
             "screwdriver",
             "saw",
             "chisel",
             "vise",
             "wrench",
             "pliers",
             "knife"];
items[8] = "fork";

//append items
items.push("spoon");
items.push("awl", "paintbrush", "dropcloth");

//sort items alphabeticaly
items.sort();

function listItems(){
    for(var i = 0; i < items.length; i ++)
        console.log(items[i]);
}

listItems();