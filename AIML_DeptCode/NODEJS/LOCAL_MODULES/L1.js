//importing local modules print.js and Person.js in commonJS module mode

const mm = require('./print');

const Person = require('./Person');

//calling a function from print.js
const greeting = mm.print("PESU");
console.log(greeting); // Outputs: Hello, World!

//import a literal from print.js
console.log(mm.num);

//importing an object
console.log(mm.obj);

//importing a function from a class
const person1 = new Person();
console.log(person1.greet());

