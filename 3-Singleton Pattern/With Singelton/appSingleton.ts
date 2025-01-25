import { SingletonLogger } from "./SingletonLogger";

const logger1 = SingletonLogger.getInstance()
logger1.log(`Message from logger1`)

const logger2 = SingletonLogger.getInstance()
logger2.log('Message form logger2')

console.log(`Logger1 logs: ${logger1.getLogCount()}`);
console.log(`Logger2 logs: ${logger2.getLogCount()}`);
