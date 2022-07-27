// console.log('Dojo Pizzeria');

// The Pizza Oven
// Create a function called pizzaOven. We should feel free to customize what information we keep track of for our pizza, 
// but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.

// Create a function called pizzaOven that returns a JavaScript (Pizza) Object

// Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]

// Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]

// Create 2 more pizzas with any toppings we like!

// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!


function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza ={};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
// console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
// console.log(p2);

var p3 = pizzaOven("thin crust", "white", "mozzarella", ["tomatos", "basil", "red peppers"]);
// console.log(p3);

var meatLovers = pizzaOven("pan", "marinara", "mozzarella", ["pepperoni", "sausage", "meat balls", "bacon", "chicken"]);
console.log(meatLovers);