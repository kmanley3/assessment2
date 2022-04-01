///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]


const justThePrices = cart.map(function(element){
    return element.price
})
console.log(justThePrices)
const summedPrice = justThePrices.reduce(function(acc,curr){
    return acc + curr
})
// console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    finalPrice = cartTotal * (1 + tax) - couponValue
    return finalPrice
}
// console.log(calcFinalPrice(summedPrice, 5, .06))



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    The information a restaurant would need about its customers would be. Their Name (for identification), what table they're at(for location), what drink they have and its cost, what entree they have and its cost,
    what dessert they're having, and how they're paying, and total cost for that customer Their name should be a string, their table number should be a number, their drink should be a string, 
    their entree should be a string, the costs of both their entree and drink should be a number, their dessert should be a string, dessert cost should be a number. How they're paying is a string

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    name        : "Kirsten",
    tableNum    : 5,
    drink       : "Red Cream Soda",
    drinkCost   : 1.99,
    entree      : "Chicken Pesto",
    entreeCost  : 15,
    dessert     : "Lava Cake",
    dessertCost : 10

}
