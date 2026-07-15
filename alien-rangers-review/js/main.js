//Arrays
//Create an array of tv shows. Loop through and print each show to the console
let shows = ['drake and josh', 'iCarly', 'stranger things']
function favShows(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    } return 'My fav shows'
}
// favShows(shows)

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [1,2,3,4,5,6,7,8,9,10]
let evenNums = nums.filter(even => even % 2 === 0)
// console.log(evenNums)

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
let numbers = [23, 1, 34, 77, 3, 90]

function mathIt(arr) {
    let sorted = arr.sort((a,b) => a - b)
    return sorted[1] + sorted[sorted.length - 2]
}
console.log(mathIt(numbers))