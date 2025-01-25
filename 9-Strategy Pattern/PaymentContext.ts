import { IPaymentStrategy } from "./IPaymentStrategy";

export class PaymentContext{
    private strategy:IPaymentStrategy

    constructor(strategy:IPaymentStrategy){
        this.strategy = strategy
    }

    setPaymentStrategy(strategy:IPaymentStrategy){
        this.strategy = strategy
    }

    makePayment(amt:number){
        this.strategy.pay(amt)
    }
}