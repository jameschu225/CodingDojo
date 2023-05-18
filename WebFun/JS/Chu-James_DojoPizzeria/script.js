function pizzaOven(crustType, sauceType, cheeses, toppings){
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType =sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
let pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(pizza1)
let pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(pizza2)
let pizza3 = pizzaOven("burn", "white", ["pepperjack", "american"], ["egg", "tuna"])
console.log(pizza3)
let pizza4 = pizzaOven("crisp", "black", "yellow", ["tomato", "oilver", "pickle"])
console.log(pizza4)

function randomPizza(i){
    let pizzanumber = "pizza" + Math.round(i);
    let pizza1 = {
        crustType: "deep dish",
        sauceType: "traditional",
        cheeses: "mozzarella",
        toppings: ["pepperoni", "sausage"]
        };
    let pizza2 = {
            crustType: 'hand tossed',
            sauceType: 'marinara',
            cheeses: [ 'mozzarella', 'feta' ],
            toppings: [ 'mushrooms', 'olives', 'onions' ]
        };
    let pizza3 = {
            crustType: 'burn',
            sauceType: 'white',
            cheeses: [ 'pepperjack', 'american' ],
            toppings: [ 'egg', 'tuna' ]
        };
    let pizza4 = {
            crustType: 'crisp',
            sauceType: 'black',
            cheeses: 'yellow',
            toppings: [ 'tomato', 'oilver', 'pickle' ]
        };
    return pizzanumber
    }

console.log(randomPizza((Math.random() * 4) + 1))