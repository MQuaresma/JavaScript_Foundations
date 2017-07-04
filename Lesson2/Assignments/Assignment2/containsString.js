function containsString(mainString, searchString){
    return (mainString.indexOf(searchString) != -1);
}

console.log(containsString("independent", "depend"));
console.log(containsString("independent", "indy"));