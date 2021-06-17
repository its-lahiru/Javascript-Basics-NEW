// old
var user = {
    fName: "Lahiru",
    age: 25
}

var myFirstName = user.fName;

console.log(myFirstName);



// Es6
const list = {
    listName: "Shopping List",
    items: ['Milk', 'Bread', 'Jam']
}

const {listName, items} = list;
// fields we need and where they come from

console.log(listName, items);