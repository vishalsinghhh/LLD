import { CreditCardPayment, DebitCardPayment, PaypalPayment } from "./PaymentStrategyService";
import { PaymentContext } from "./PaymentContext";

const creditCardPayment = new CreditCardPayment()
const debitCardPayment = new DebitCardPayment()
const paypalPayment = new PaypalPayment()

const paymentContext = new PaymentContext(creditCardPayment)
paymentContext.makePayment(100)

paymentContext.setPaymentStrategy(debitCardPayment)
paymentContext.makePayment(200)

paymentContext.setPaymentStrategy(paypalPayment)
paymentContext.makePayment(300)