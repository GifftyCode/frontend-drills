// Exercise 1: Arithmetic operators
// Create variables for two numbers and perform:
// - Addition
// - Subtraction  
// - Multiplication
// - Division
// - Modulus (remainder) - try 10 % 3, what do you get?

let num1 = 12
let num2 = 6

const sumNum = num1 + num2
const subNum = num1 - num2
const mulNum = num1 * num2
const divNum = num1 / num2
const modNum = num1 % num2

console.log(sumNum, subNum, mulNum, divNum, modNum)

// Exercise 2: Comparison operators
// Create two numbers and check:
// - Is first number greater than second?
// - Is first number equal to second? (use ===)
// - Is first number NOT equal to second? (use !==)
// Log the results

const compA = 10
const compB = 3
let greaterThan = compA > compB
let equalTo = compA === compB
let notEqual = compA !== compB

console.log(greaterThan, equalTo, notEqual)

// Exercise 3: Check if a number is positive, negative, or zero
// Create a variable called 'number' with any value
// Use if/else to log:
// - "Positive" if number > 0
// - "Negative" if number < 0  
// - "Zero" if number === 0

const number = 0
if(number > 0) {
    console.log("Positive")
} else if(number < 0) {
    console.log("Negative")
} else {
    console.log("Zero")
}

// Exercise 4: Grade calculator
// Create a variable called 'score' (0-100)
// Use if/else if/else to log the grade:
// - 90-100: "A"
// - 80-89: "B"
// - 70-79: "C"
// - Below 70: "F"

let score = 190
if(score < 0 || score > 100){
    console.log("Invalid score")
}else if(score >= 90 && score <= 100) {
    console.log("A")
} else if(score >= 80 && score < 90) {
    console.log("B")
} else if(score >= 70 && score < 80) {
    console.log("C")
} else {
    console.log("F")
}


// Exercise 5: Voting eligibility
// Create variables: age and isCitizen (boolean)
// Use if statement with && (AND operator) to check:
// - If age >= 18 AND isCitizen is true, log "Can vote"
// - Otherwise log "Cannot vote"

const age = 12;
let isCitizen = true

if(age >= 18 && isCitizen === true) {
    console.log("Can Vote")
} else {
    console.log("Cannot vote")
}

// Exercise 6: Login check
// Create variables: username and password
// Check if username === "admin" AND password === "12345"
// - If both true: "Login successful"
// - If either false: "Login failed"

let username = "Gifftybabe"
let password = "Sha414"

if(username === "admin" && password === "12345") {
    console.log("Login successful")
} else {
    console.log("Login failed ")
}

// BONUS: Try using || (OR operator)
// Check if a number is divisible by 3 OR divisible by 5

const num = 16
if(num % 3 === 0 || num % 5=== 0) console.log("Number divisible by either 3 or 5")


    // Test your understanding of modulus
console.log("=== MODULUS TESTS ===");
console.log("10 % 3 =", 10 % 3); // What do you expect?
console.log("15 % 5 =", 15 % 5); // What do you expect?
console.log("7 % 2 =", 7 % 2); // What do you expect?

// Now check divisibility properly
let testNumber = 20;
console.log(`Is ${testNumber} divisible by 4?`, testNumber % 4 === 0);
console.log(`Is ${testNumber} even?`, testNumber % 2 === 0);