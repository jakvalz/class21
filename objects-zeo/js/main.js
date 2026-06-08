//Create a stopwatch object that has four properties and three methods
const stopwatch = {}

stopwatch.brand = 'fitbit'
stopwatch.color = 'white'
stopwatch.shape = 'round'
stopwatch.size = 'shmaledium'

stopwatch.start = function (){
    console.log('STARTIIIIIIIIIIIING')
}
stopwatch.stop = function (){
    console.log('STOPPPPPPPIIIIIIING')
}
stopwatch.sayBrand = function(){
    console.log(stopwatch.brand)
}

console.log(stopwatch.sayBrand())