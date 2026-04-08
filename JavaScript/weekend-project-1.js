// NUMBER GUESSING GAME
// Build this in the console (no UI needed yet)

// Requirements:
// 1. Generate a random number between 1-100
//    Hint: Math.random() gives you a decimal between 0-1
//    Research: "javascript random number between 1 and 100"

const randomNumber = Math.floor(Math.random() * 100) + 1

// 2. Give the player 10 attempts
const maxAttempt = 10
let hasWon = false

// 3. For testing, simulate guesses by creating an array:
const guesses = [50, 75, 60, 55, 58, 57, 56, 62, 59, 61, 63, 64] // Example guesses


// 4. For each guess:
//    - Check if it's correct
//    - If correct: log "Correct! You guessed it in X attempts!"
//    - If too high: log "Too high! Try again."
//    - If too low: log "Too low! Try again."
//    - If out of attempts: log "Game over! The number was [number]"

for(let i = 0; i < testGuesses.length && i < maxAttempt; i++) {
    let currentGuess = testGuesses[i]
    let attemptCount = i + 1
    if(currentGuess === randomNumber) {
        console.log(`Correct! You guessed it in ${attemptCount} attempts!`)
        hasWon = true

        break;
    } else if(currentGuess > randomNumber) {
        console.log("Too high! Try again.")
    } else {
        console.log("Too low! Try again.")
    }


// 5. Keep track of:
//    - How many attempts they've used
//    - Whether they've won

const remainingAttempt = maxAttempt - attemptCount

if(remainingAttempt > 0 && !hasWon) {
    console.log(`You have ${remainingAttempt} attempt(s) left`)
}

  console.log("---");

}

if(!hasWon) {
    console.log("Game over...")
}

// Pseudo-code structure:
// - Generate secret number
// - Loop through test guesses
// - For each guess, check and log result
// - Stop if they guess correctly or run out of attempts





