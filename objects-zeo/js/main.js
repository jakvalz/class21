//Create a stopwatch object that has four properties and three methods
const stopwatch = {}

stopwatch.size = 'medium';
stopwatch.brand = 'Goober';
stopwatch.color = 'purple';
stopwatch.shape = 'round';

stopwatch.timeOut = function() {
    console.log('Time is up!')
};

stopwatch.tellTime = function(time) {
    console.log(`The time is ${time}`)
};

stopwatch.start = function() {
    console.log('startingggg')
};

stopwatch.stop = function() {
    console.log('STOP!')
};

console.log(stopwatch)