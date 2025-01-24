// Without OCP: Modifications require editing the existing class
class PaymentProcessor {
  processPayment(type: string) {
    if (type === "credit") {
      console.log("Processing credit card payment");
    } else if (type === "paypal") {
      console.log("Processing PayPal payment");
    }
  }
}

// With OCP: Extend functionality without modifying the existing class
interface PaymentMethod {
  process(): void;
}

class CreditCardPayment implements PaymentMethod {
  process() {
    console.log("Processing credit card payment");
  }
}

class PayPalPayment implements PaymentMethod {
  process() {
    console.log("Processing PayPal payment");
  }
}

// Usage
const payments: PaymentMethod[] = [
  new CreditCardPayment(),
  new PayPalPayment(),
];
payments.forEach((payment) => payment.process());
