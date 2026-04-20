export class AppConfig{
    public static intance: AppConfig;

    private constructor(
        private readonly lojaname: string,
        private readonly moeda: string,
        private readonly diaspreparo: number,
    ){}
    public static getInstance(): AppConfig {
        if(!AppConfig.intance){
            AppConfig.intance = new AppConfig("Loja Feliz", "R$", 3);
        }
        return AppConfig.intance;
    }
    public getLojaname(): string {
        return this.lojaname;
    }
    public getMoeda(): string {
        return this.moeda;
    }
    public getDiaspreparo(): number {
        return this.diaspreparo;
    }

}