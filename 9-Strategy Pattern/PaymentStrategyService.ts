import { IPaymentStrategy } from "./IPaymentStrategy";

export class CreditCardPayment implements IPaymentStrategy{
    pay(amt: number): void {
        console.log(`Trasaction by credit card of amount ${amt}`);
        
    }
}

export class DebitCardPayment implements IPaymentStrategy{
    pay(amt: number): void {
        console.log(`Trasaction by debit card of amount ${amt}`);
        
    }
}

export class PaypalPayment implements IPaymentStrategy{
    pay(amt: number): void {
        console.log(`Trasaction by Paypal of amount ${amt}`);
        
    }
}