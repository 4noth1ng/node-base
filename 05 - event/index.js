// emitter.on(eventName, listener)：监听事件，也可以使用addListener；
// emitter.off(eventName, listener)：移除事件监听，也可以使用removeListener；
// emitter.emit(eventName[, ...args])：发出事件，可以携带一些参数；

const EventEmmiter = require("events");

const bus = new EventEmmiter();
function clickHandle(args) {
  console.log("监听到click事件", args);
}

bus.on("click", clickHandle);

setTimeout(() => {
  bus.emit("click", "czc");
  bus.off("click", clickHandle);
  bus.emit("click", "czc");
}, 2000);
