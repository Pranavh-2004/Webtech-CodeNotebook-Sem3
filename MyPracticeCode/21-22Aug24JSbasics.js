let document;

if (document) {
  document.write("This is the script file<br/>");
}
console.log("This is the console");

//varibles
let block_scoped_var1 = 0; //cannot be redeclared
var function_scoped_var = 1; // can be redeclared
const block_scoped_var2 = 0; //cannot be redeclared

//define and call function
function test_function() {
  if (function_scoped_var && document)
    document.write("running a function <br/>");
}
test_function();

console.log("STRING: ", typeof "test_string");

//type is undefined
var x;
console.log(typeof x);

//defining string object
let s = new String("object_string");
console.log(typeof s);

/*
Arithmetic operators: +, -, *, /, %
Equality: ==, ===, !=, !==, >==, >=, <==, <=
Logical: &&, ||, !
*/

console.log("Hello " + "world");
console.log(16 + " apples");
console.log(16 + 4 + " apples"); //left to right
console.log(16 + " apples " + 4);

//if statements and construct
if ("4" == 4) {
  console.log("It is same");
} else {
  console.log("It is not same");
}

//homeogeneous equality check
if ("4" === 4) {
  console.log("It is same");
} else {
  console.log("It is not same");
}

//functions

function add(a, b) {
  if (!isNaN(a + b)) {
    return a + b;
  } else {
    console.log("sum is Nan");
    return -1;
  }
}

var sum = add(2, 3);
console.log(sum);

var sum2 = add(3); //will give NaN as B isnt defined
console.log(sum2);

function adds() {
  let sum = 0;
  for (let i in arguments) {
    sum += arguments[i]; //i is index not the element here unlike python
  }
  return sum;
}

var sums = adds(1, 2, 3, 4, 5, 6);
console.log(sums);

//array with variable no of elements as an input
function addsArr(...args) {
  let sum = 0;
  for (let i in args) {
    sum += args[i]; //i is index not the element here unlike python
  }
  return sum;
}

var sumsarr = addsArr(1, 2, 3, 4, 5, 6, 7);
console.log(sumsarr);

//WAF draw('x',5,6) which draws a 5*6 matrix of stars

function draws(sym = "*", row = 2, col = 2) {
  let res = "";
  for (let i = 0; i < row; i++) {
    for (let i = 0; i < col; i++) {
      res += sym;
    }
    res += "\n";
  }
  console.log(res);
}

draws("*", 5, 6);
draws("$", 3, 8);
draws("%");

//console table
console.table([
  { a: 1, b: 2 },
  { a: 3, b: 4 },
]);
console.log("\n");

//hoisting - all variables and function declarations are moved to the top of the current scope
var nums;
nums = 10;
console.log(nums);
nums += 20;
console.log(nums);

//WAF isMax function
function maxarr(arr) {
  let max1 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max1 = arr[i];
    }
  }
  return max1;
}

function isMax(arr, a) {
  let arrmax = maxarr(arr);
  if (a > arrmax) {
    return 1;
  } else if (a < arrmax) {
    return -1;
  } else {
    return 0;
  }
}

console.log(isMax([1, 2, 3], 4));
