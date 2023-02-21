let maximum = parseInt(prompt("Enter the maximum number"));
let attempts = 0
const targetNum = Math.floor(Math.random()*maximum) + 1

while(!maximum) {
    maximum = parseInt(prompt("Enter a valid number"))
}

let guess = parseInt(prompt("Enter your first guess!"));

while (parseInt(guess)!==targetNum){
    if (guess=== 'q') break;
    attempts += 1
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:")
    }else {
        guess = prompt("Too low! Enter a new guess:")
    }
}

if(guess === 'q'){
    console.log("Game aborted")
} else {
    console.log("Game Over")
}

console.log(`You got it! The correct answer is ${targetNum} and you took ${attempts} turns to answer.`)