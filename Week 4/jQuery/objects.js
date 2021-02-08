// var person = ["alex", 23, "virginia", function(){console.log("Hello!")}, true];
var person = {
    name: "alex",
    age: 24,
    location: "virginia",
    ability: function(){console.log("hello!")},
    canDrive: true
}
// must go through the keys

person.name = "bob";
console.log(person.name);
console.log(person.ability());
// must use // in order to execute functions within objects not just the key
for (var key in person){
    console.log(key, ":", person[key]);
}
// sometimes the key gets outputted in alphabetical order, don't stress the order of the keys