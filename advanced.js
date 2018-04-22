// Function constructor

// john object literal
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// Function constructor always start with capital letter.
var Person = function (name,yearOfBirth,job) {

       this.name = name;
       this.yearOfBirth = yearOfBirth;
       this.job = job;
}

// Method Prototype
Person.prototype.calculateAge = function () {
    console.log(2018 - this.yearOfBirth);
};

// Property Prototype
Person.prototype.lastName = "Smith";


var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1970, 'designer');
var mark = new Person('Mark', 1989, 'retired');


john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

// Object.create

/*var personProto = {

    calculateAge: function () {
        console.log(2018 - this.yearOfLength);
    }

};

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';


var jane = Object.create(personProto,
    {
        name: {value: 'Jane'},
        yearOfBirth: {value: 1969},
        job: {value: 'designer'}

    });*/

// Primitives vs Objects

// Primitives
/*
var a = 24;
var b = a;
a = 46;

console.log(a);
console.log(b);

// Objects
var obj1 = {
     name: 'John',
     age: 27
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);


// Functions

var age = 27;
var obj = {
    name: 'Ankur',
    city: 'Pune'
};

function change(a,b) {

   a =30;
   b.city = 'Delhi';
    
}

change(age,obj);

console.log(age);
console.log(obj.city);
*/
