// Exercise 1: Arrow Function Practice
// Convert this function to an arrow function:
function add(a, b) {
  return a + b;
}
// Create the arrow version called addArrow
const addArrow = (a, b) => {
    return a + b
}

// Exercise 2: Default Parameters
// Create a function called greetWithDefault that:
// - Takes a name parameter
// - Has a default value of "Guest" if no name is provided
// - Returns "Hello, [name]!"
// Test with: greetWithDefault() and greetWithDefault("John")

const greetWithDefault = (name = "Guest") => {
    return `Hello, ${name}`
}
console.log(greetWithDefault())
console.log(greetWithDefault("John"))

// Exercise 3: Understanding Scope
// Run this code and explain what happens:
let globalVar = "I am global";

function testScope() {
  let localVar = "I am local";
  console.log(globalVar); // Can you access this?
  console.log(localVar);  // Can you access this?
}

testScope();
console.log(globalVar); // Can you access this?
// console.log(localVar); // What happens here? Try it!

// Exercise 4: Area Calculator with Defaults
// Create a function calculateArea that:
// - Takes length and width parameters
// - Width defaults to length (for squares)
// - Returns the area
// Test: calculateArea(5) should return 25
// Test: calculateArea(5, 3) should return 15

const calculateArea = (length, width = length) => {
    return length * width
}
console.log(calculateArea(5))
console.log(calculateArea(5, 3))

// Exercise 5: Temperature Converter
// Create a function celsiusToFahrenheit that:
// - Takes celsius as parameter
// - Returns fahrenheit
// Formula: (celsius * 9/5) + 32
// Test with: 0, 100, 37

const celsiusToFahrenheit = (celsius) => {
     const fahrenheit = (celsius * 9/5) + 32

     return fahrenheit
}
console.log(celsiusToFahrenheit(0))
console.log(celsiusToFahrenheit(100))
console.log(celsiusToFahrenheit(37))

// Exercise 6: Return Early Pattern
// Create a function called canDrive that:
// - Takes age and hasLicense (boolean) as parameters
// - Returns "Too young" if age < 18
// - Returns "No license" if hasLicense is false
// - Returns "Can drive" if both conditions pass
// Use early returns (return immediately when condition fails)

const canDrive = (age, hasLicense) => {
    if(age < 18){
        return "Too young"
    } 
    if (hasLicense === false) {
        return "No license"
    }  
        return "Can drive"
    

}

console.log(canDrive(18, true))