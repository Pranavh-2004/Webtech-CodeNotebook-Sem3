//events is a core module in Nodejs to cretae custom events
/*EventEmitter is a class in events module which provides 
properties and functions to create and handle events */
//Event, the first parameter is custom event emitter
//emit() function is called to trigger the event

var events = require('events'); 

var em = new events.EventEmitter();

em.on('Event', function () {
    console.log('Event Triggered');
});

em.emit('Event');


