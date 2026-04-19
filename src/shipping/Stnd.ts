import { Shipping } from "../interfaces/Shipping";

export class Stnd implements Shipping {
    public calculate(peso: number, distance: number): number{
            if(peso <= 0 || distance <= 0){
                throw new Error("Peso e distância devem ser maiores que zero.");
            }
            const taxabase = 5;
            const valorPeso = peso * 1;
            const ValorDistancia = distance * 0.3;

            const totalfrete = taxabase + valorPeso + ValorDistancia;
            return totalfrete;

            }
    public getName(): string{
        return "Frete Padrão";
    }

    public deliveryDays(distance: number): number {
        if(distance <= 0){
            throw new Error("Distância deve ser maior que zero.");
        }
        const diasPreparo = 3;

        const viagem = Math.ceil(distance / 100);

        return diasPreparo + viagem;
    }
}
