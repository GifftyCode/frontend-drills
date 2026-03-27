// Exercise 1: Function Declarations
// Create a function called greet that:
// - Takes a name as parameter
// - Returns "Hello, [name]!"
// Call it with your name and log the result

const greet = (name) => {
    return `Hello, ${name}`
}
console.log(greet("Gift"))

// Exercise 2: Multiple Parameters
// Create a function called multiply that:
// - Takes two numbers as parameters
// - Returns their product
// Test with multiply(5, 3)
function multiply (num1, num2) {
    return num1 * num2
}
console.log(multiply(5, 3))

// Exercise 3: Boolean Return
// Create a function called isEven that:
// - Takes a number as parameter
// - Returns true if even, false if odd
// Test with several numbers

const isEven = function(number) {
    if(number % 2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(isEven(15))

// Exercise 4: String Manipulation Function
// Create a function called getFullName that:
// - Takes firstName and lastName as parameters
// - Returns them combined with a space
// Test it with different names

const getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}
console.log(getFullName("Ngozi", "Uloka"))

// Exercise 5: Calculator Function
// Create a function called calculate that:
// - Takes three parameters: num1, num2, operator (string)
// - operator can be "+", "-", "*", "/"
// - Returns the result of the operation
// Example: calculate(10, 5, "+") should return 15

function calculate(num1, num2, operator) {
    if(operator === "+") {
        return num1 + num2
    } else if(operator === "-"){
        return num1 - num2
    }  else if(operator === "*"){
        return num1 * num2
    }  else if(operator === "/"){
        return num1 / num2
    } else {
        return "Invalid operation"
    }
}
console.log(calculate(12, 6, "%"))

// Exercise 6: Age Category
// Create a function called getAgeCategory that:
// - Takes age as parameter
// - Returns "Child" if age < 13
// - Returns "Teenager" if age 13-19
// - Returns "Adult" if age >= 20
// Test with different ages

const getAgeCategory = (age) => {
    if(age <= 0 || age >= 150) {
        return "Invalid age"
    }else if(  age < 13 ) {
        return "Child"
    } else if(age >= 13 && age <= 19) {
        return "Teenager"
    } else {
        return "Adult"
    }
}

console.log(getAgeCategory(149))