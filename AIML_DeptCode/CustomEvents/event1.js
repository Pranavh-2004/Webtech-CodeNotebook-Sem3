//on() and addListener() - both would do the same job
//even listener/handler function can also have parameters - function(data)
//any number of parameters we can have in function handler

var events = require('events');

var em = new events.EventEmitter();

//Define FirstEvent
em.addListener('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});

//Define SecondEvent
em.on('SecondEvent', function (data) {
    console.log('Second subscriber: ' + data);
});


//Define Third event
em.on('ThirdEvent', function (data1, data2, data3) {
    console.log('Data1: ' + data1);
	console.log('Data2: ' + data2);
	console.log('Data3: ' + data3);
});

// Fire FirstEvent
em.emit('FirstEvent', 'This is my first Node.js event emitter example.');

// Fire SecondEvent
em.emit('SecondEvent', 'This is my second Node.js event emitter example.');

// Fire ThirdEvent
em.emit('ThirdEvent', 'Hi', 'Hello', 'Welcome to PES');
