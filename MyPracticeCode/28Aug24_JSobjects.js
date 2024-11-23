// Built in objects

/*
Math
Number
String
Array
Date
Window
Document
*/

// Window object
status1 = "this is a test";
console.log(typeof status1);

// Array object

let arr1 = new Array(100); //creates array of 100 elements
console.log(arr1); //undefined

let arr2 = new Array(10, 20); //creates array of 2 elements
console.log(arr2);

var alist = [1, "li", "gamma", "4"];
console.log(alist);
console.log(typeof alist);

const arr3 = [1, 2];
console.log(arr3);

arr3.length = 7;
console.log(arr3);

for (i in arr3) console.log(typeof i + " " + i);

// Array elements can be objects
// myArray[0]=Date.now;
// myArray[1]=myFunc;

// Array methods
/* 
push, pop, shift, unshift, join, indexof, sort
*/

let arr = [1, 2, 3, 4, 5];
let str = arr.join(); //seperator=',';
console.log(arr);
console.log(str);

let arr4 = [6, 7, 8, 9];
let str1 = arr4.join("#");
console.log(str1);

let arr5 = [10, 30, 20, 40, 90, 60];
arr5.sort();
console.log(arr5);

let arr6 = [10, 100, 1000, 30, 20, 60];
arr6.sort();
console.log(arr6);
// it treats the elements as a string and sorts according to ascii
// it is string sort by default

// integer sort
let arr7 = [10, 100, 1000, 30, 20, 60];
arr7.sort((a, b) => {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
});
console.log(arr7);

// sort order ascending
arr7.sort((a, b) => {
  return a - b;
});
console.log(arr7);

// reverse sort order (descending)
arr7.sort((a, b) => {
  return b - a;
});
console.log(arr7);

// deleting elements
let arr8 = [1, 2, 3, 4, 5];
console.log(arr8);
delete arr8[2]; // replaces with undefined
console.log(arr8);

arr8.splice(1, 2); // removes 2 elements from index 1
console.log(arr8);

arr8.reverse();
console.log(arr8);

const months = ["jan", "march", "april", "june"];
months.splice(1, 0, "feb"); // inserts at index 1
console.log(months);

months.splice(4, 1, "may"); // replaces 1 element at index 4
console.log(months);

months.splice(5, 0, "june"); // inserts 1 element at index 5
console.log(months);

let num = new Number("123"); // converts string into number 123
console.log(num);

let num1 = new Number("1a"); // NaN
console.log(num1);

// toString method
const t = 2;
console.log(typeof t.toString() + " " + t.toString());

// Number Object
console.log("Number max: ", Number.MAX_VALUE);
console.log("Number min: ", Number.MIN_VALUE);
console.log("Number + inf: ", Number.POSITIVE_INFINITY);
console.log("Number - inf: ", Number.NEGATIVE_INFINITY);
console.log("Number NaN: ", Number.NaN);

// String Object
let str2 = new String("Hello");

console.log(str2.charAt(2));
console.log(str2.charCodeAt(2));
let str3 = str2.concat(", world");
console.log(str3);

console.log(str3.split(" "));
console.log(str3.substring(1));

// Date Object
var now = new Date();
console.log(now);

let now1 = new Date(2024, 10, 15); // month and day starts from 0
console.log(now1);

console.log(now.getTime());

// arithmetic on date
let tmrw = new Date();
tmrw.setDate(now.getDate() + 1); // or now.getTime()+24*60*60*1000 (milliseconds in a day)
console.log(tmrw);

let someday = new Date();
someday.setDate(32); // goes to next month
console.log(someday);

//date acc to exactly what u put
let day1 = new Date("2000 / 10 / 25");
console.log(day1);

// Math methods
let y = -1.269;
let x = 12.357;
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.abs(y));
console.log(Math.ceil(x));
console.log(Math.floor(x));
console.log(Math.round(x));
console.log(Math.max(1, 2, 3, 4));
console.log(Math.min(1, 2, 3, 4));
console.log(Math.pow(2, 3));
console.log(Math.random());

// random number between 101 and 200
let rand = Math.ceil(Math.random() * 100 + (200 - 100));
console.log(rand);

// generate a random date in the year 2024
let daterand = Math.ceil(Math.random() * 10 + (31 - 0));
let date1 = new Date();
date1.setDate(daterand);

let monthrand = Math.ceil(Math.random() * 10 + (12 - 0));
let month1 = new Date();
date1.setMonth(monthrand);

date1.setFullYear(2024);

console.log(date1);
