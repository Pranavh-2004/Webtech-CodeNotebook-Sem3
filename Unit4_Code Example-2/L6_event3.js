var events = require("events");

var em = new events.EventEmitter();

em.emit("Event");
console.log("Event wont trigger since listener hasnt been registered yet");

em.on("Event", function () {
  console.log("Event Triggered - listener was registered");
});

em.emit("Event");
