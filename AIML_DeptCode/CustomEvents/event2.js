//function call as a second parameter to on() / addListener() 
//removeListener() to remove event listener or handler


var events = require('events');
var em = new events.EventEmitter();

var listner1 = function listner1() {
   console.log('listner1 executed.');
}

var listner2 = function listner2() {
  console.log('listner2 executed.');
}

em.on('connection', listner1);

em.on('connection', listner2);

em.emit('connection');

em.removeListener('connection', listner1);

console.log("Listner1 will not listen now.");

em.emit('connection');

console.log("Program Ended.");