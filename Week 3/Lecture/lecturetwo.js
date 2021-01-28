//Conditionals

// if // else

// let z = 90;

// if(z > 100) {
//     console.log("Whoah, Buy more $GME!!")
// }
// // else if(z>80) {
// //     console.log("Buy more BB.")
// // }
// // else if(z>70) {
// //     console.log("Buy more BB.")
// // }
// // else if(z>60) {
// //     console.log("Buy more BB.")
// // }
// else{
//     console.log("Quit")
// }
// if(z>80){
//     console.log("Hello again!")
// }

//While loops
// for(var i = 0; i < 10; i++){
//     console.log(i)
// }

// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// function eat() {
//     console.log("MMMM. Alex love pizza!")
// }

// var alexHungry = false;

// if(alexHungry){
//     eat()
// }
// else(
//     console.log("Alex no eat pizza")
// )
//the computer does nothing with this until the function is called

// function gameStop(b,c,d,e){
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(e);
//     // return b*c;
// }
// console.log(10,3);
// gameStop(4,2,"STONK","AMC$")
// console.log( gameStop(3,10) );

var satisfied = false;

function tipCalculator(bill){
    return bill * 1.2;
}
function badService(bill){
    return bill * 1.1;
}

if(satisfied){
    console.log(tipCalculator(10));
}
else(
    console.log(badService(10),"Siri, open up yelp!")
)
