//#1 Create an array of pizzaToppings with at least four different toppings

const pizzaToppings = ["pepperoni", "cheese", "sausage", "taco", "pineapple", "chicken"];

//#2 Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings

function greetCustomer() {
    for (const toppings of pizzaToppings) {
        return console.log("Hello! Welcome to Pizza Planet. Our available pizza toppings are " + pizzaToppings);}
}
greetCustomer(); //invoking the function

//#3 Create a getPizzaOrder function that has the parameters size, crust, and an indefinite amount of toppings as inputs prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!" RETURNS a list with the size, crust, and toppings


function getPizzaOrder(size, crust, ...toppings) {
    let myPizzaOrder = [size, crust, toppings];
    console.log(`One ${size}, ${crust}, ${toppings} pizza coming right up!`);
    return myPizzaOrder;
}

//#4 Create a preparePizza function that has an array as its parameter with three items: a size, a crust, and a list of toppings, CONSOLE LOGS something like "...Cooking pizza...", RETURNS(?) a pizza Object with appropriate key-value pairs for size, crust, and toppings

function preparePizza(myPizzaOrder) {
    console.log("...Baking your pizza...");
    let pizzaObject = {
        size: myPizzaOrder[0],
        crust: myPizzaOrder[1],
        toppings: myPizzaOrder[2]
    };
    return pizzaObject;
}


// #5 Create a servePizza function that has a parameter of a pizza Object, logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!", outputs the same pizza Object that was passed in

function servePizza(pizzaObject) {
    return console.log(`Order up! Here's your ${pizzaObject.size}, ${pizzaObject.crust} pizza with ${pizzaObject.toppings}! Enjoy!`);
}


// #6 Call each function and (starting with preparePizza) use the returned value from the previous function as its input

servePizza(preparePizza(getPizzaOrder("extra-large", "stuffed-crust", "sausage, pepperoni, and bbq chicken")));