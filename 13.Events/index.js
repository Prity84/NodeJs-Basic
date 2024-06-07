import EventEmitter from "events";
//Creating instance of that events

const customEmitter = new EventEmitter();

//1. on: listen/register for an events    => any time call this event will fire
//2. once: listen/register for an events => only one time fire
//3.emit: emit/call an event

// customEmitter.on("response", (name, id) => {
customEmitter.once("response", (name, id) => {
  console.log(`user: ${name} id: ${id}`);
});
customEmitter.emit("response", "prity", 22);
customEmitter.emit("response", "neha", 12);
customEmitter.emit("response", "aaru", 20);
