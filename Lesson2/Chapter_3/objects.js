var items = [
    {
        name: "saw",
        cost: 4.99,
        id: 221,
        picture: "saw.jpg"
    },
    {
        name: "knife",
        cost: 5.90,
        id: 23,
        picture: "knife.jpg"
    }
];

// to refer to a property from a certain object use the following syntax: objectName.propertyName

// ====== two ways of creating an object =======
var item = {};
item.name = "hammer";
item.cost = 9.99;
item.id = 101;
item.picture = "hammer.jpg";

var item2 = {
    name: "screwdriver",
    cost: 0.99,
    id: 12,
    picture: "screwdriver.jpg"
};
// =============================================

items.push(item);
items.push(item2);

function listItems(){
    for(var i = 0; i < items.length; i ++)
        console.log(items[i].name + " is $"+items[i].cost);
}

listItems();