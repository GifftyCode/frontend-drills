

const randomNumber = Math.floor(Math.random() * 50) + 1

const guessNumber = [10, 46, 32, 7, 1, 9, 8, 20, 5, 6, 13, 19, 22, 14, 18]

let hasWon = false;
let maxAttempt = 10

for(let i = 0; i < guessNumber.length && i < maxAttempt; i++) {
    let currentNumber = guessNumber[i]
    let attemptCount = i + 1 
    if(currentNumber === randomNumber) {
        console.log(`Correct!!! You won at ${attemptCount} attempt`)
        hasWon = true;
        break
    } else if(currentNumber > guessNumber) {
        console.log(`Too High... Try again`)
    } else {
        console.log(`Too Low... Try again`)
    }

    const remainingAttempt = maxAttempt - attemptCount
    if(remainingAttempt > 0 && !hasWon) {
        console.log(`You have ${remainingAttempt} attempt(s) left`)
    }
    console.log("_________________________________________")    
}
if(!hasWon) {
    console.log("Game Over!!!")
}