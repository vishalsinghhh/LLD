export class SingletonLogger{
    private static instance: SingletonLogger
    private logs: string[] = []

    private constructor(){}

    static getInstance(): SingletonLogger{
        if(!SingletonLogger.instance){
            SingletonLogger.instance = new SingletonLogger()
        }
        return SingletonLogger.instance
    }

    log(message:string){
        this.logs.push(message);
        console.log(`[Singleton Log]: ${message}`);
    }

    getLogCount(): number{
        return this.logs.length;
    }
}