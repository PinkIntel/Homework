//declaring variables

const pizzaPlace = "Pizza Planet"; //I ended up using a string for the name.
let numberOfToppings =  30; //30 toppings is plenty to choose from!
let location = "Planet Mars";

console.log("My pizza place's name is called " + pizzaPlace);
console.log("Number of toppings: " + numberOfToppings);

//template literal
console.log("Welcome to " + pizzaPlace + "! We are located on "+ location + ". We offer over " + 
numberOfToppings + " toppings to choose from!");

//construct an if...else statement.

if (numberOfToppings <=10) {
    console.log("Quality, not quantity.");
} else {
    console.log("That's a whole lot of pizza!");
};

//homework challenge loop

// let evenNumbers = 30;
// let curTotal = 0;
// for (let p = 1; p <= numberOfToppings; p++) {
// curTotal += p;
// console.log(curTotal);
// }

// let p = 1;
// while (p <= 30) {
//     console.log(p +  " That's a whole lot of pizza!");
//     p++;
// };

// if (numberOfToppings % 2 == 30) {
//     console.log(numberOfToppings);
// }