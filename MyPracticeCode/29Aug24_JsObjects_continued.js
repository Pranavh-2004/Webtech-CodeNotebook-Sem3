// ==> Window object

/*
  location -> current url
  history -> browser history
  localStorage -> key value pair storage
  innerHeight, innerWidth -> window width and height

  alert(text) -> function to show alert window
  prompt(text, default) -> function to show prompt window
  confirm(text) -> function to show confirm box

  setInterval(function, intervalInMilliSeconds) -> run function after every period of time
  setTimeout(function, intervalInMilliSeconds) -> run function after a period of time
*/

// alert
/*
alert("Stay alert");

// prompt

const name1 = prompt("Enter your name: ");
document.write("Hello, " + name1 + "<br/>");

const age = prompt("Enter your age: "); // age will be a string. use parseInt() or parseFloat() to convert it to number
document.write("Next year you will be " + (parseInt(age) + 1) + " years old");

// confirm

confirm("Confirm to continue");
*/
// clock in document
/*
const zeroPad = (num, places) => String(num).padStart(places, "0");

let clock;

function startClock() {
  if (clock) return;

  clock = setInterval(() => {
    let d = new Date();
    document.querySelector("#clock").innerText = `${d.toLocaleString()}`;
  }, 1000);
}

function stopClock() {
  clearInterval(clock);
  clock = null;
}

document.querySelector("#clock-button").addEventListener("click", () => {
  if (clock) stopClock();
  else startClock();
});

startClock();
*/
// ==> Objects

let obj = new Object();
obj = {
  name: "Name",
  age: 20,
};

console.log(obj["name"]);
console.log(obj.age);

// object constructor

function product(name, id, brand) {
  this.name = name;
  this.id = id;

  this.show = function () {
    console.log(this.name, this.brand);
  };
}

product.prototype.brand = "Apple";

const p1 = new product("Apple iPhone 15", 1);
const p2 = new product("Apple iPhone 15 Pro", 2);
const p3 = new product("Apple iPhone 15 Pro Max", 2);

p1.show();
p2.show();
p3.show();

console.log(product.prototype);

// class notation for objects

class Product {
  brand = "Apple";

  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  show() {
    console.log(this.name);
  }
}

const po1 = new Product("Apple iPhone 15 (class)", 1);
po1.show();
