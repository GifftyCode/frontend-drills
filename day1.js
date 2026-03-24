// Exercise 1: Create variables about yourself
// Use const for values that won't change, let for values that might


// - your first name
const firstName = "Ngozi"
// - your last name  
const lastName = "Uloka"
// - your age
const age = 30
// - your city
let city = "Abuja"
// - whether you're currently employed (true/false)
let isEmployed = true
// - an array of 3 programming languages you want to master
let programmingLanguages = ["JavaScript", "Typescript", "Go"]

// Exercise 2: Log them using template literals
console.log(`My name is ${firstName} ${lastName}, I am ${age} years old...`)

// Exercise 3: Perform calculations
// - Add 5 to your age and store in a new variable
let newAge = age + 5
// - Create a variable for the year you were born (2025 - your age)
const birthYear = 2026 - age
// - Log both
console.log(newAge, birthYear)

// Exercise 4: Work with your skills array
// - Log the first skill
console.log(programmingLanguages[0])
// - Log the last skill
console.log(programmingLanguages[programmingLanguages.length-1])
// - Log how many skills you have
console.log(programmingLanguages.length)
// - Add a new skill to the end of the array
programmingLanguages.push("Python")
programmingLanguages.unshift("Kotlin")
programmingLanguages.pop()
// - Log the updated array
console.log(programmingLanguages)


// Exercise 5: String manipulation
// - Create your full name by combining firstName and lastName
const  fullName = firstName + " " + lastName
// - Convert your full name to uppercase
console.log(fullName.toUpperCase())
// - Convert it to lowercase
console.log(fullName.toLowerCase())
// - Log the length of your full name
console.log(fullName.length)