export class Logger {
    private static instance: Logger;

    private constructor(){}

    public static getInstance(): Logger {
        if(!Logger.instance){
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public log(message: string): void {
        const time = new Date().toISOString();
        console.log(`LOG: [${time}] ${message}`);
    }
}
    