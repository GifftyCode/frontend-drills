// Exercise 1: Creating and Accessing Arrays
// Create an array of your 5 favorite movies
// Log:
// - The entire array
// - The first movie
// - The last movie (use array.length)
// - The third movie
const favMovies = ["Wednessday", "Rookie", "Behind the scene", "Dispicable"]
console.log(favMovies)
console.log(favMovies[0])
console.log(favMovies[favMovies.length - 1])
console.log(favMovies[2])


// Exercise 2: Array Length
// Using your movies array:
// - Log how many movies you have
// - Try to access an index that doesn't exist (like index 10)
// - What happens?
console.log(favMovies.length)
console.log(favMovies[10])

// Exercise 3: Adding and Removing Elements
const fruits = ["apple", "banana", "orange"];
// Use push to add "grape" to the end
// Use pop to remove the last item
// Use unshift to add "mango" to the beginning
// Use shift to remove the first item
// Log the array after each operation
console.log(fruits)
fruits.push("grape")
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.unshift("mango")
console.log(fruits)
fruits.shift()
console.log(fruits)


// Exercise 4: Build a Simple Shopping List
// Start with an empty array called shoppingList
// Add these items one by one using push:
// - "milk"
// - "bread"
// - "eggs"
// Log the list
// Remove the first item (you bought it!)
// Log the updated list
// Add "butter" to the end
// Log the final list
const shoppingList = ["milk", "bread", "eggs"]
console.log(shoppingList)
shoppingList.shift()
console.log(shoppingList)
shoppingList.push("butter")
console.log(shoppingList)

// Exercise 5: Array Practice
const numbers = [10, 20, 30, 40, 50];
// Without using array methods, write code to:
// - Find and log the first number
// - Find and log the last number
// - Find and log the middle number
// - Calculate and log the sum of all numbers (use a loop or manually)
const firstNumber = numbers[0]
console.log(firstNumber)
const lastNumber = numbers[numbers.length - 1]
console.log(lastNumber)

const numbersLength = numbers.length
const middleIndex = Math.floor(numbersLength/2)
const middleNumer = numbers[middleIndex]

console.log(middleNumer)

// const sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]

let sum = 0
for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

console.log(sum)


// Exercise 6: Array Modification
const students = ["John", "Jane", "Bob"];
// Change the second student's name to "Alice"
// Add two more students to the end
// Remove the first student
// Log the final array
// Log how many students are in the array now

students[1] = "Alice"
students.push("Judith", "Ken")
console.log(students)
console.log(students.length)

// BONUS: String to Array
const sentence = "JavaScript is awesome";
// Research: How can you turn this string into an array of words?
// Hint: Look up the split() method
// Try to do it and log the result
const arraySentence = sentence.split(" ")
console.log(arraySentence)