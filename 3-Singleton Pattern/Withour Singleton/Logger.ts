export class Logger{
    private logs: string[] = []

    log(message:string){
        this.logs.push(message)
        console.log(`[Log]: ${message}`);
    }

    getLogCount():number{
        return this.logs.length;
    }
}