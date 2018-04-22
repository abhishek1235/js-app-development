/////////////////////////////////////
// Hoisting

// functions declarations
//calculateAge(1965);
/*
function calculateAge(year) {
    console.log(2018 - year);
}

calculateAge(1965);

// retirement(1956);
// functions expressions
var retirement = function(year) {
    console.log(65 - (2018 - year));
}

retirement(1956);*/

// variables

//console.log(age);
/*var age = 23;   // stores in global execution context object, so in the variable object of global execution context object, sounds confusing.

console.log(age);


function foo() {   // stores in his own execution context object
    //console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);*/

// Most imp use case of hoisting is not even the variables but fact that we can use for function declaration before we actually use them in code.

/////////////////////////////////////
// Scoping

// First scoping example
/*var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}*/


// Example to show the difference between execution stack and scope chain
/*var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(c);
    //console.log(a+d);
}*/



/////////////////////////////////////
// The this keyword

//console.log(this);
/*
calculateAge(1985);

function calculateAge(year) {
    console.log(2018 - year);
    console.log(this);
}

//V1.0

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2018 - this.yearOfBirth);
    }
}

john.calculateAge();*/



// V2.0
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2018 - this.yearOfBirth);
/!*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();*!/
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge; // method borrowing
mike.calculateAge();
*/
