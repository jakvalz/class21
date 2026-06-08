//Arrays
//Create and array of tv shows. Loop through and print each show to the console
let arrTvs = ['stranger things', 'drake & josh', 'iCarly']
// arrTvs.forEach(x => console.log(x))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let numArr = [1,2,3,4,5,6,7,8,98,28,22]
let newArr = numArr.filter(x => x % 2 === 0)
// console.log(newArr)

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function weirdSum(arr) {
    let sorted = arr.sort((a,b) => a - b)
    return sorted[1] + sorted[sorted.length - 2]    
}

console.log(weirdSum([2,3,1,5,4]))