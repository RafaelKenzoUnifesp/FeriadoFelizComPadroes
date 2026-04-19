import { Shipping } from "../interfaces/Shipping";
import { Exps } from "../shipping/Exps";
import { Stnd } from "../shipping/Stnd";

export class ShippingFactory {
    public static createS(type: string): Shipping {
        switch(type.toLowerCase()){
            case "express":
                return new Exps();
            case "normal":
                return new Stnd();
            default:
                throw new Error("Tipo de frete não aceito");
        }
    }
}