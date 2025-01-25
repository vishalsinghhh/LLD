import { Logger } from "./Logger";

const logger1 = new Logger()
logger1.log("Message from logger1")

const logger2 = new Logger()
logger2.log("Message from logger2")

console.log(`Logger1 logs: ${logger1.getLogCount()}`);
console.log(`Logger2 logs: ${logger2.getLogCount()}`);
