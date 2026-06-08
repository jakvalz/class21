// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = 'Christmas'
favHoliday = favHoliday.toUpperCase()

// console.log(favHoliday)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let string = 'some string'

// console.log(string.substring(string.length - 3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. 
// Alert the absolute value of the difference. Call the function.
function absNum(a,b,c,d,e) {
    return Math.abs((a - b - c - d - e) - 100)
}

// console.log(absNum(1,2,3,4,5))

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function minAndMax(a,b,c) {
    return `lowest value is ${Math.min(a,b,c)}. highest value is ${Math.max(a,b,c)}`
}

// console.log(minAndMax(23,4,2))

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// function headsOrTails() {
//     let ranNum = Math.random()
//     if(ranNum < .5) {
//         return 'heads'
//     } else {
//         return 'tails'
//     }
//     return result
// }

const headsOrTails = () => Math.random() < .5 ? 'heads' : 'tails'

// console.log(headsOrTails())

//*Loops*
//Create a function that takes in a number. 
// Console log the result of heads or tails using the previous function x times 
// where x is the number passed into the function. Call the function.
function flipFlipZehCoin(n) {
    for(let i = 1; i <= n; i++){
        let result = headsOrTails()
        console.log(result)
    }
}

flipFlipZehCoin(1)