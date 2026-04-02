// NUMBER GUESSING GAME
// Build this in the console (no UI needed yet)

// Requirements:
// 1. Generate a random number between 1-100
//    Hint: Math.random() gives you a decimal between 0-1
//    Research: "javascript random number between 1 and 100"

const max = 10
const randomNumber = Math.floor(Math.random() * max)

console.log(randomNumber)

// 2. Give the player 10 attempts

// 3. For testing, simulate guesses by creating an array:
const testGuesses = [50, 75, 60, 55, 58, 57, 56]; // Example guesses

// 4. For each guess:
//    - Check if it's correct
//    - If correct: log "Correct! You guessed it in X attempts!"
//    - If too high: log "Too high! Try again."
//    - If too low: log "Too low! Try again."
//    - If out of attempts: log "Game over! The number was [number]"

for(let i = 0; i < testGuesses.length; i++) {
    let attemptCount = 0;
    if(testGuesses[i] === randomNumber) {
        attemptCount++;
        console.log(`Correct! You guessed it in ${attemptCount} attempts!`)
    } else if(testGuesses[i] > randomNumber)
}

// 5. Keep track of:
//    - How many attempts they've used
//    - Whether they've won

// Pseudo-code structure:
// - Generate secret number
// - Loop through test guesses
// - For each guess, check and log result
// - Stop if they guess correctly or run out of attempts