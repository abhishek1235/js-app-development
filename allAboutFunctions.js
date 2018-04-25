// Passing functions as arguments

/*

var years = [1990, 1965, 1937, 2005, 1998];


function arrayCalc(arr, fn) {

    var arrRes = [];
    for (var i =0; i <arr.length; i++){

        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

// Call back function to find the age value
function calculateAge(el) {

    return 2018 -el;
}

 var ages = arrayCalc(years, calculateAge);
console.log(ages);

// Call back function to find person is adult or not
function isAdult(el) {

    return el >=18;
}

var fullAges = arrayCalc(ages, isAdult);

console.log(fullAges);

// Call back function to check the heart rate of each person
function maxHeartRate(el) {
    
    if (el >=18 && el <= 81) {

        return Math.round(206.9 - (0.67 * el));
    } else {

        return -1;
    }
    
}

var rates = arrayCalc(ages, maxHeartRate);

console.log(rates);*/

// Functions returning functions

/*function schoolJob(jobType) {

     if (jobType === 'teacher'){

         return function (name) {
             console.log(name + ', Can you please introduce yourself?');
         }
     } else if (jobType === 'principal'){
         
         return function (name) {

             console.log('How much experience do you have as a Principal, ' + name + '?');
             
         }
     } else {

         return function (name) {

             console.log('Hello ' + name + 'what do you do?');

         }
     }
    
}

var teacherJob = schoolJob('teacher');

teacherJob('John');

var principalJob = schoolJob('principal');

principalJob('Mike');

schoolJob('teacher')('Mike');*/

/*

//  Immediately Invoked Function Expressions (IIFE)
/!*
IIFE can be used for data privacy. This is the best solution if we only want to make a variable private.
we don't need to create a whole function & then call it like in below example.

parser here take the IIFE as an expression not as a declaration.
 *!/

/!*function game() {

    var score = Math.random() *10;
    console.log(score >= 5);
}
game();*!/


(function () {
    var score = Math.random() *10;
    console.log(score >= 5);
})();

//console.log(score);

*/
